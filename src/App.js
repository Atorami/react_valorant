import "./App.css";
import axios from "axios";
import { URL } from "./api/api";
import { useEffect, useState } from "react";

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

  const agents = agent.map((val) => <li>{val.displayName}</li>);

  return <ul>{agents}</ul>;
}

export default App;
