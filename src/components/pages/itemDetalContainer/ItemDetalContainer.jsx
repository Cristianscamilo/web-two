import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetalContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const {addToCart, getTotalQuantityById} = useContext(CartContext)
  let initial = getTotalQuantityById(id)
  

  useEffect(() => {
   let productsCollection = collection( db, "products")
   let refDoc = doc(productsCollection, id )
   getDoc (refDoc).then(res => {
    setItem({...res.data(), id: res.id})
   }) 
  }, [id]);

  const onAdd = (cantidad)=>{
    let infoProduct = {...item, quantity: cantidad};
    addToCart(infoProduct)
    }

  return Object.keys(item).length > 0 && <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetalContainer;
