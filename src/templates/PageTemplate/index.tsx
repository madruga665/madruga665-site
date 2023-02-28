import Header from "../../components/Header";
import styles from "./styles.module.scss";

interface IPageTemplateProps {
  children: React.ReactNode;
}

function PageTemplate ({ children }: IPageTemplateProps) {
  return (
    <div className={styles.Container}>
      <Header />
      {children}
    </div>
  );
};

export default PageTemplate;
