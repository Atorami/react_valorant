import "./scss/app.scss";
import axios from "axios";
import { URL } from "./api/api";
import { useEffect, useState } from "react";
import Agent from "./components/Agent";
import Header from "./components/Header";

function App() {
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        setAgent(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const agents = agent.map((val) => (
    <li key={val.uuid}>
      <Agent
        img={val.displayIcon}
        name={val.displayName}
        devname={val.developerName}
        descr={val.description}
      ></Agent>
    </li>
  ));

  return (
    <>
      <Header></Header>
      <ul>{agents}</ul>
    </>
  );
}

export default App;
