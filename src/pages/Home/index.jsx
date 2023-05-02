import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className="title">Valorant Tracker</h2>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Home;
