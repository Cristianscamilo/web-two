const ItemDetail = ({item}) => {

  const {title,img, description, price } = item

  return (
  <>
    <article>
      <h2>{title}</h2>
      <img src={img} alt="" />
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <button> Comprar </button>
    </article>
  </>
  )
};

export default ItemDetail;
