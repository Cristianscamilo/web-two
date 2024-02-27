import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getOneProduct } from "../../../productsMock";

const ItemDetalContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    getOneProduct(parseInt(id))
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return Object.keys(item).length === 0 ? <h2>vacio</h2> : <ItemDetail item={item}/>;
};

export default ItemDetalContainer;
