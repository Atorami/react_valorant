import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Home from "../../../pages/Home";
import Agents from "../../../pages/Agents";
import Lineups from "../../../pages/Lineups";
import Esport from "../../../pages/Esport";

const Navigation = () => {
  return (
    <ul className={styles.root}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/agents">Agents</Link>
      </li>
      <li>
        <Link to="/lineups">Lineups</Link>
      </li>
      <li>
        <Link to="/esport">Esport</Link>
      </li>
    </ul>
  );
};

export default Navigation;
