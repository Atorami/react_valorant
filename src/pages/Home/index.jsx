import styles from "./Home.module.scss";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className={styles.root}>
      <ReactPlayer
        url="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
        loop="true"
        playing="true"
        className={styles.player}
      ></ReactPlayer>
    </div>
  );
};

export default Home;
