import styles from "./CarWidget.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";

const CarWidget = () => {
  const {cart} = useContext( CartContext )
  return (
    <div className={styles.carritoYContador}>
      <FaCartShopping
        color="orange"
        size="2em"
        className={styles.carritoIcon}
      />
      <span className={styles.contador}>{cart.length}</span>
    </div>
  );
};

export default CarWidget;

//carrito de compra
