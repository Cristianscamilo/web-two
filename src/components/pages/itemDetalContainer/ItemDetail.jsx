import styles from "./ItemDetail.module.css";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";


const ItemDetail = ({ item }) => {
  const { title, img, description, price, stock } = item;

  return (
    <>
      <article className={styles.cartDetail}>
        <h3 className={styles.titleCartDeail}>{title}</h3>
        <img src={img} alt="" className={styles.imgCartDetail} />
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <div className={styles.containerCount}>
        <ItemCountContainer stock={stock} />
        <button> Comprar </button>
        </div>
      </article>
    </>
  );
};

export default ItemDetail;
