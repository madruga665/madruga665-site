import styles from "./styles.module.scss";

interface INewsSoonProps {
  title: string;
}

const NewsSoon = ({ title }: INewsSoonProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default NewsSoon;
