import styles from "./ItemListContainer.module.css";
import { ProductCard } from "../common/ProductCard";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2>{greeting}</h2>

      <h3 className={styles.tituloCategoria}>Teclados</h3>
      <div className={styles.bloquePRoductos}>
        <img
          className={styles.imagenCategoria}
          src="https://res.cloudinary.com/dzivhovxf/image/upload/v1706808364/webreact/marca/logo_teclados.jpg"
          alt="diferentes teclados"
        />
        <ProductCard
          titulo={"Teclado bluetooth Logitech K380 QWERTY español color rosa"}
          descrip={"Teclado inalámbrico portátil multitarea rosa"}
          precio={38.04}
        />
        <ProductCard
          titulo={
            "Teclado bluetooth Logitech K380 QWERTY español color off-white"
          }
          descrip={"Teclado inalámbrico portátil multitarea blanco"}
          precio={38.04}
        />
        <ProductCard
          titulo={
            "Logitech K400 Plus, Teclado Inalámbrico Touch, Pc Android Tv Color del teclado Negro Idioma Español"
          }
          descrip={"Diseñado para un control relajado"}
          precio={32.18}
        />
        <ProductCard
          titulo={
            "Logitech K380, Teclado Multi-dispositivo Bluetooth Color del teclado Grafito Idioma Español"
          }
          descrip={"ESCRIBE CON CUALQUIER DISPOSITIVO"}
          precio={38.04}
        />
      </div>
    </>
  );
};

export default ItemListContainer;
