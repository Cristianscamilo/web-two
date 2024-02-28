import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ title, img, price, id }) => {
  return (
    <>
      <article className={styles.cartGeneral}>
        <h2 className={styles.titleCart}> {title}</h2>
        <img src={img} alt="" className={styles.sizeImgGeneral}/>
        <p className={styles.priceCart}>Precio: $ {price}</p>
        <Link to={`/item/${id}`}>
          <button className={styles.buttonCart}> Ir al Producto </button>
        </Link>
      </article>
    </>
  );
};
