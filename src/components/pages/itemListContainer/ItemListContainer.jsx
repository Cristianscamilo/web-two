import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta; // para saber que pide a db
    
    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
        );
        consulta = productsCollectionFiltered;
      } else {
        consulta = productsCollection ;
    }

    getDocs(consulta)
      .then((res) => {
        let newArray = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        setItems(newArray);
      })
  }, [category]);

  return <ItemList items={items}/>;
};

export default ItemListContainer;

