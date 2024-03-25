import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { Button } from "@mui/material";
import { IoBagOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export const CartDetailContainer = () => {
  const { cart, clearCart, removeByID, getTotalPrice } =
    useContext(CartContext);
  let totalPrice = getTotalPrice();

  return (
    <>
      <div style={{ padding: "20px", minHeight: "40vh" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} alignItems="right">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              {cart.map(({ id, title, quantity }) => {
                return (
                  <CartDetail
                    key={id}
                    title={title}
                    quantity={quantity}
                    cart={cart}
                    id={id}
                    removeByID={removeByID}
                  />
                );
              })}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              {cart.length !== 0 ? (
                <div>
                  <h3
                    style={{
                      marginBottom: "20px",
                    }}
                  >
                    Total a pagar: ${totalPrice.toLocaleString()}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      sx={{ justifyContent: "right" }}
                      onClick={clearCart}
                    >
                      vaciar el carrito
                    </Button>
                    <Link to="/checkout">
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        sx={{ justifyContent: "right" }}
                      >
                        Ir a Pagar
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IoBagOutline size="15em" />
                  <div>
                    <h4> Carrito vacio 0</h4>
                    <Link to="/">
                      <Button size="small" color="primary" variant="contained">
                        Ver opciones
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
