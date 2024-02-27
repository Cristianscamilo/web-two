import { ProductCard } from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map(({ id, title, img, price }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            img={img}
            price={price}
            id={id}
          />
        );
      })}
    </>
  );
};

export default ItemList;
