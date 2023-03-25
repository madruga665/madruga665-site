import Link from "next/link";
import Image from "next/image";

import { IconSerealized } from "@/interfaces/homePage";

import styles from "./styles.module.scss";
import WindowCard from "@/components/WindowCard";
import { getHomePageData } from "./home.service";

export const metadata = {
  title: "Luciano Amâncio - Home",
};

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
          alt='Luciano Amâncio'
          priority
        />
      </div>
      <div className={styles.presentationContainer}>
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
