import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";

export const CartContainer = () => {
  const { cart, clearCart, removeByID, getTotalPrice } = useContext(CartContext);
  let totalPrice = getTotalPrice()

  return <CartDetail cart={cart} clearCart={clearCart} removeByID={removeByID} totalPrice={totalPrice} />;
};
