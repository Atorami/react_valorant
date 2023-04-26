import Navigation from "./Navigation";
import Search from "./Search";
import Profile from "./Profile";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.root}>
      <img src="" alt="" className="logo" />
      <Navigation></Navigation>
      <Search></Search>
      <Profile></Profile>
    </div>
  );
};

export default Header;
