import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import { HomePageProps, IconSerealized } from "@/interfaces/homePage";

import styles from "./styles.module.scss";

export const metadata = {
  title: "Luciano Amancio - Home",
};

async function Home() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home`);
  const homePageProps: HomePageProps = await response.data;

  const { presentation, socialIcons, image } = homePageProps;

  return (
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
  );
}

export default Home;