import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { getOneProduct } from "../../../productsMock";
import { CartContext } from "../../context/CartContext";

const ItemDetalContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const {addToCart, getTotalQuantityById} = useContext(CartContext)
  let initial = getTotalQuantityById(+id)
  

  useEffect(() => {
    getOneProduct(+id)
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onAdd = (cantidad)=>{
    let infoProduct = {...item, quantity: cantidad};
    addToCart(infoProduct)
    }

  return Object.keys(item).length > 0 && <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetalContainer;
