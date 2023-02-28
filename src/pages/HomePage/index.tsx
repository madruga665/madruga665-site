import { HomePageProps } from "../../interfaces/homePage";
import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

function HomePage({ image, presentation }: HomePageProps) {
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
