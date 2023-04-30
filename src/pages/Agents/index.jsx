import { useEffect, useState } from "react";
import AgentBlock from "./AgentBlock";
import styles from "./Agents.module.scss";
import axios from "axios";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents")
      .then((res) => setAgents(res.data.data));
  }, []);

  return (
    <ul className={styles.root}>
      {agents.map((val) => (
        <AgentBlock
          icon={val.displayIcon}
          name={val.displayName}
          devname={val.developerName}
          descr={val.description}
        ></AgentBlock>
      ))}
    </ul>
  );
};

export default Agents;
