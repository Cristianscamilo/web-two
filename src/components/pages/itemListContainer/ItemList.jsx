import { ProductCard } from "../../common/productCard/ProductCard";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <section className={styles.containerCarts}>
      {items.map(({ id, title, img, price }) => {
        return (
          <ProductCard key={id} title={title} img={img} price={price} id={id} />
        );
      })}
    </section>
  );
};

export default ItemList;
