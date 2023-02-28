import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

interface hompePageProps {
  presentation: string;
  image: string;
}

function HomePage({ image, presentation }: hompePageProps) {
  return (
    <PageTemplate>
      <section className={styles.Container}>
        <div className={styles.ImageContainer}>
          <img className={styles["about-image"]} src={image} alt='Luciano Amancio' />
        </div>
        <div className={styles.TextContainer}>
          <p>{presentation}</p>
        </div>
      </section>
    </PageTemplate>
  );
}

export default HomePage;
