import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Esport.module.scss";
// import { useSelector } from "react-redux";

const Esport = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/events")
      .then((res) => setEvents(res.data.data));
  }, []);

  console.log("EVENTS", events);
  const evs = events.map((val) => (
    <li>
      {val.displayName}
      <div>
        Start Time : {val.startTime}
        <span></span>
        End Time : {val.endTime}
      </div>
    </li>
  ));

  return <ul className={styles.root}>{evs}</ul>;
};

export default Esport;
