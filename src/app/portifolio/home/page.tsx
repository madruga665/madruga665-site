import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import { IconSerealized } from "@/interfaces/homePage";

import styles from "./styles.module.scss";
import WindowCard from "@/components/WindowCard";

export const metadata = {
  title: "Luciano Amancio - Home",
};

async function getHomePageData() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home`);
  const data = await response.data;
  return data;
}

async function Home() {
  const homePageData = await getHomePageData();
  const { presentation, socialIcons, image } = homePageData;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          width={350}
          height={350}
          className={styles["about-image"]}
          src={image}
          alt='Luciano Amancio'
          priority
        />
      </div>
      <div className={styles.textContainer}>
        <WindowCard>
          <p>{presentation}</p>
        </WindowCard>
        <div className={styles.socialContainer}>
          {socialIcons?.map((icon: IconSerealized, index: number) => (
            <Link key={icon.name} href={icon.link} target='_blank' rel='noreferrer'>
              <Image src={icon.iconImg} alt={icon.name} width={200} height={200} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
