import styles from "./CarWidget.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";

const CarWidget = () => {
  const { getTotalItems } = useContext( CartContext )
  let total = getTotalItems()
  return (
    <div className={styles.carritoYContador}>
      <FaCartShopping
        color="white"
        size="2em"
        className={styles.carritoIcon}
      />
      <span className={styles.contador}>{total}</span>
    </div>
  );
};

export default CarWidget;

//carrito de compra
