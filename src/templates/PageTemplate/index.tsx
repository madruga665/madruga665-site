import Header from "../../components/Header";
import styles from "./styles.module.scss";

interface IPageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: IPageTemplateProps) => {
  return (
    <main className={styles.container}>
      <Header />
      {children}
    </main>
  );
};

export default PageTemplate;
