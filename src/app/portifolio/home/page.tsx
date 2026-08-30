import Link from 'next/link';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

import { IconSerealized } from '@/interfaces/homePage';
import { getHomePageData } from './home.service';
import LinkButton from '@/components/LinkButton';
import WindowCard from '@/components/WindowCard';

import styles from './styles.module.scss';

export const metadata = {
  title: 'Luciano Amâncio - Home',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function Home() {
  const homePageData = await getHomePageData();
  const { presentation, socialIcons, image, curriculo } = homePageData;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          width={350}
          height={350}
          className={styles['about-image']}
          src={image}
          alt="Luciano Amâncio"
          priority
        />
      </div>
      <div className={styles.presentationContainer}>
        <LinkButton
          variant="pink"
          url={curriculo}
          data-track-click="download-resume"
          data-track-category="cta"
          data-track-label="Download Curriculo"
        >
          Download Curriculo <FiDownload style={{ marginLeft: 10 }} />
        </LinkButton>
        <WindowCard>
          <p>{presentation}</p>
        </WindowCard>
        <div className={styles.socialContainer}>
          {socialIcons?.map((icon: IconSerealized) => (
            <Link
              key={icon.name}
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              data-track-click={`social-${icon.name.toLowerCase()}`}
              data-track-category="social"
              data-track-label={`Social - ${icon.name}`}
            >
              <Image src={icon.iconImg} alt={icon.name} width={200} height={200} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
