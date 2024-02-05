import styles from "./CarWidget.module.css";
import { FaCartShopping } from "react-icons/fa6";

const CarWidget = () => {
  return (
    <div className={styles.carritoYContador}> 
      <FaCartShopping color="orange" size="2em" className={styles.carritoIcon} />
      <span className={styles.contador}>15</span>
    </div>
  );
};

export default CarWidget;

//carrito de compra
