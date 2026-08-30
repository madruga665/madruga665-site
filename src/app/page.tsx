import Link from 'next/link';
import Head from 'next/head';
import { Brand } from '@/components/Brand';

import styles from './styles.module.scss';

export const metadata = {
  title: 'A Vida é Bela!!! XD',
};

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Brand />
        <span>Desenvolvedor Web Fullstack</span>
      </div>
      <Link
        role="button"
        href="/portifolio/home"
        data-track-click="landing-enter-portfolio"
        data-track-category="navigation"
        data-track-label="Ir para portifolio"
      >
        ir para portifolio
      </Link>
    </div>
  );
}

export default Home;
