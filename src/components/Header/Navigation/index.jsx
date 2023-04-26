import styles from "./Navigation.module.scss";

const Navigation = () => {
  const nav = ["Home", "Agents", "Stats"];
  return (
    <ul className={styles.root}>
      {nav.map((val) => (
        <li>{val}</li>
      ))}
    </ul>
  );
};

export default Navigation;
