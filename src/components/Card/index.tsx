import Image from "next/image";

import styles from "./styles.module.scss";

interface CardProps {
  img: string;
  headerTitle: string;
  headerSubtitle: string;
  headerDate: string;
  description: string;
}

function Card({ img, headerTitle, headerSubtitle, headerDate, description }: CardProps) {
  return (
    <div className={styles.Card}>
      <header>
        <Image width={80} height={80} src={img} alt={headerSubtitle} priority />
        <div>
          <h3>{headerTitle}</h3>
          <h4>{headerSubtitle}</h4>
          <p>{headerDate}</p>
        </div>
      </header>
      <div className={styles.Content}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
