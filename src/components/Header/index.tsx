import Brand from "../Brand";
import NavLinks from "../Navlinks";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Brand />
      <NavLinks />
    </header>
  );
};

export default Header;
