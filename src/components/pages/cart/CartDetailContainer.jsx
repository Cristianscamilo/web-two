import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { Button } from "@mui/material";
import { IoBagOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
                  <h3>Total a pagar: ${totalPrice.toLocaleString()}</h3>
                  <Button
                    size="small"
                    color="warning"
                    variant="contained"
                    sx={{ justifyContent: "right" }}
                    onClick={clearCart}
                  >
                    vaciar el carrito
                  </Button>
                </div>
              ) : (
                <div style={{display:"flex", alignItems:"center"}}>
                  <IoBagOutline size="15em" />
                  <h4>Tu carrito esta vacio</h4>
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
