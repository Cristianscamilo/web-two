import ItemCountContainer from "../../common/itemCount/ItemCountContainer";

const ItemDetail = ({ item }) => {
  const { title, img, description, price, stock } = item;

  return (
    <>
      <article>
        <h2>{title}</h2>
        <img src={img} alt="" />
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <ItemCountContainer stock={stock} />
        <button> Comprar </button>
      </article>
    </>
  );
};

export default ItemDetail;
