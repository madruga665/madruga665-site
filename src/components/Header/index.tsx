import Brand from "../Brand";
import NavLinks from "../NavLinks";
import styles from "./styles.module.scss";

interface HeaderProps {
  paths: {
    title: string;
    path: string;
  }[];
}

const Header = ({ paths }: HeaderProps) => {
  return (
    <header className={styles.Header}>
      <Brand />
      <NavLinks paths={paths} />
    </header>
  );
};

export default Header;
