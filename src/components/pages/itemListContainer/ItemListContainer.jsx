import { useState, useEffect } from "react";
import { getProducts } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //manejo de promesa
    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
