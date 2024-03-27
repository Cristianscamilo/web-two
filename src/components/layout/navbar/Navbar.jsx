import styles from "./Navbar.module.css";
import CarWidget from "../../common/carWidget/CarWidget";
import { Link } from "react-router-dom";
import { menuNavigation } from "../../../router/menuNavigation";

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
          {menuNavigation.map(({ id, text, path }) => (
            <Link key={id} to={path}>
              <li>{text}</li>
            </Link>
          ))}
        </ul>
        <CarWidget />
      </div>
    </>
  );
};
