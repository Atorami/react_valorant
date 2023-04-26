import Navigation from "./Navigation";
import Search from "./Search";
import Profile from "./Profile";

import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/icons/icon-valorant.svg";

const Header = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <Navigation></Navigation>
      <Search></Search>
      {/* <Profile></Profile> */}
    </div>
  );
};

export default Header;
