import styles from "./Agent.module.scss";

const Agent = (props) => {
  return (
    <div className={styles.agent}>
      <img className="img" src={props.img}></img>
      <div className={styles.info}>
        <h2 className="title">
          {props.name} ({props.devname})
        </h2>
        <p className="descr">{props.descr}</p>
      </div>
    </div>
  );
};

export default Agent;
