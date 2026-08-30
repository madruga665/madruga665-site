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

function getSocialNetworkName(nameOrUrl: string, link: string): string {
  const combined = `${nameOrUrl} ${link}`.toLowerCase();
  if (combined.includes('github')) return 'github';
  if (combined.includes('linkedin')) return 'linkedin';
  if (combined.includes('instagram')) return 'instagram';
  if (combined.includes('facebook')) return 'facebook';
  return 'link';
}

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
          {socialIcons?.map((icon: IconSerealized) => {
            const network = getSocialNetworkName(icon.name, icon.link);
            return (
              <Link
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
                data-track-click={`social-${network}`}
                data-track-category="social"
                data-track-label={`Social - ${network}`}
              >
                <Image src={icon.iconImg} alt={network} width={200} height={200} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
