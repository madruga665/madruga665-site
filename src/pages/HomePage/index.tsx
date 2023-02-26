import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

interface hompePageProps {
  presentation: string;
  image: string;
}

function HomePage({ image, presentation }: hompePageProps) {
  return (
    <PageTemplate>
      <div className={styles.AboutContainer}>
        <div className={styles.ImageContainer}>
          <img className={styles["about-image"]} src={image} alt='Luciano Amancio' />
        </div>
        <div className={styles.TextContainer}>
          <p>{presentation}</p>
        </div>
      </div>
    </PageTemplate>
  );
}

export default HomePage;
