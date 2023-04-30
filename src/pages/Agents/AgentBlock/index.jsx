import styles from "./AgentBlock.module.scss";

const AgentBlock = (props) => {
  return (
    <li className={styles.root}>
      <img src={props.icon} alt="" className="a-block__img" />
      <h2 className="a-block__title">{props.name}</h2>
    </li>
  );
};

export default AgentBlock;
