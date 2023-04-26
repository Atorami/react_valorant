import styles from "./Home.module.scss";

const Home = (props) => {
  return (
    <div className={styles.root}>
      <div
        style={{ backgroundImage: `url(${props.portrait})` }}
        className={styles.container}
      >
        <h3 className="subtitle"></h3>
        <h2 className="title"></h2>
        <h3 className="roletitle"></h3>

        <p className="descr"></p>
      </div>
    </div>
  );
};

export default Home;
