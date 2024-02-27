import {Link} from "react-router-dom";


export const ProductCard = ({ title, img, price, id }) => {
  return (
    <>
      <article>
        <h2>{title}</h2>
        <img src={img} alt="" />
        <p>Precio: ${price}</p>
        <Link to={`/item/${id}`}>
        <button> Ir al Producto </button>
        </Link>
      </article>
    </>
  );
};