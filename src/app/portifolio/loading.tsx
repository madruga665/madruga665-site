import Spinner from "@/components/Spinner";
import styles from "./../styles.module.scss";

function Loading() {
  return (
    <div className={styles.Loading}>
      <Spinner />
    </div>
);
}

export default Loading;
