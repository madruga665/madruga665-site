import Head from "next/head";
import Image from "next/image";

import { HomePageProps } from "../../interfaces/homePage";
import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

function HomePage({ image, presentation }: HomePageProps) {
  return (
    <PageTemplate>
      <Head>
        <title>Luciano Amâncio - Home</title>
      </Head>
      <section className={styles.Container}>
        <div className={styles.ImageContainer}>
          <Image
            width={350}
            height={350}
            className={styles["About-image"]}
            src={image}
            alt='Luciano Amancio'
          />
        </div>
        <div className={styles.TextContainer}>
          <p>{presentation}</p>
        </div>
      </section>
    </PageTemplate>
  );
}

export default HomePage;
