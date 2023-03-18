import React from "react";
import styles from "./styles.module.scss";

function WindowCard({ children }: any) {
  return (
    <div className={styles.card}>
      <div className={styles.tools}>
        <div className={styles.circle}>
          <span className={`${styles.red} ${styles.box}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.yellow} ${styles.box}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.green} ${styles.box}`}></span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default WindowCard;
