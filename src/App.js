import "./scss/app.scss";

import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { URL } from "./api/api";
import { useEffect, useState } from "react";

import Agent from "./components/Agent";
import Header from "./components/Header";

import Home from "./pages/Home";
import Agents from "./pages/Agents";
import Esport from "./pages/Esport";
import Matches from "./pages/Matches";
import Test from "./pages/Test";

function App() {
  const [agent, setAgent] = useState([]);
  const [agentPortrait, setAgentPortrait] = useState("");

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        setAgent(res.data.data);
        setAgentPortrait(res.data.data[0].bustPortrait);
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

  console.log(agentPortrait);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home portrait={agentPortrait}></Home>}
        ></Route>
        <Route path="/agents" element={<Agents></Agents>}></Route>
        <Route path="/agents" element={<Agents></Agents>}></Route>
        <Route path="/esport" element={<Esport />}></Route>
        <Route path="/matches" element={<Matches />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
}

export default App;
