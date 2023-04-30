import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

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
