import axios from "axios";
import { useEffect, useState } from "react";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("https://cors-proxy.htmldriven.com/?url=https://www.vlr.gg/matches")
      .then((res) => setMatches(res));
  }, []);

  console.log(matches);
  return <p>Mathes</p>;
};

export default Matches;
