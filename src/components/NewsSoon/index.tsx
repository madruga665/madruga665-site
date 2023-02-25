import styles from "./styles.module.scss";

interface INewsSoonProps {
  title: string;
}

const NewsSoon = ({ title }: INewsSoonProps) => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>{title}</h1>
    </div>
  );
};

export default NewsSoon;
