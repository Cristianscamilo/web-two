import { useState, useEffect } from "react";
import { getProducts } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (category) {
          const productsInFilter = res.filter(
            (product) => product.category === category
          );
          setItems(productsInFilter);
        } else {
          setItems(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
