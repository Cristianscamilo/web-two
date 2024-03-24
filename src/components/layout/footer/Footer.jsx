import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
      <Link to="/">
        <img
          className={styles.logoFoter}
          src="https://res.cloudinary.com/dzivhovxf/image/upload/v1706808200/webreact/marca/logocpia.jpg"
          alt="logo comercio"
        />
      </Link>
        <ul className={styles.listaFotter}>
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
      </div>
    </>
  );
};
