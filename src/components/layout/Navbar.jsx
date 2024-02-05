import styles from "./Navbar.module.css";
import CarWidget from "../common/CarWidget";

export const Navbar = () => {
  return (
    <>
      <img
        className={styles.logo}
        src="https://res.cloudinary.com/dzivhovxf/image/upload/v1706808200/webreact/marca/logocpia.jpg"
        alt="logo comercio"
      />
      <h1>CommerceCP</h1>
      <div className={styles.listaYCarrito}>
        <ul className={styles.lista}>
          <li>Home</li>
          <li>Productos</li>
          <li>Mouses</li>
          <li>Teclados</li>
          <li>Smartwhatch</li>
          <li>Nosotros</li>
        </ul>
        <CarWidget />
      </div>
    </>
  );
};
