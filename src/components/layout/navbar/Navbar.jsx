import styles from "./Navbar.module.css";
import CarWidget from "../../common/carWidget/CarWidget";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <Link to="/">
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/dzivhovxf/image/upload/v1706808200/webreact/marca/logocpia.jpg"
          alt="logo comercio"
        />
      </Link>
      <h1 className={styles.title}>CommerceCP</h1>
      <div className={styles.listaYCarrito}>
        <ul className={styles.lista}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/category/mouse">
            <li>Mouses</li>
          </Link>
          <Link to="/category/teclados ">
            <li>Teclados</li>
          </Link>
          <Link to="/category/smartwatch">
            <li>Smartwhatch</li>
          </Link>
        </ul>
        <Link to="/shopingCar">
          <CarWidget />
        </Link>
      </div>
    </>
  );
};
