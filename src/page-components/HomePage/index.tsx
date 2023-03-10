import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { HomePageProps, IconSerealized } from "../../interfaces/homePage";
import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

function HomePage({ homePageData }: HomePageProps) {
  const { presentation, socialIcons, image } = homePageData;
  return (
    <PageTemplate>
      <Head>
        <title>Luciano Amâncio - Home</title>
      </Head>
      <div className={styles.Container}>
        <div className={styles.ImageContainer}>
          <Image
            width={350}
            height={350}
            className={styles["About-image"]}
            src={image}
            alt='Luciano Amancio'
            priority
          />
        </div>
        <div className={styles.TextContainer}>
          <p>{presentation}</p>
          <div className={styles.SocialContainer}>
            {socialIcons?.map((icon: IconSerealized, index: number) => (
              <Link key={index} href={icon.link} target='_blank' rel='noreferrer'>
                <img src={icon.iconImg} alt={icon.name} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default HomePage;
