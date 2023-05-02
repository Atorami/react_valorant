import Navigation from "./Navigation";
import Search from "./Search";
import Profile from "./Profile";

import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/icons/icon-valorant.svg";

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
        <Search />
        {/* <Profile></Profile> */}
      </div>
    </div>
  );
};

export default Header;
