'use client';
import Link from 'next/link';
import Wave from 'react-wavify';
import Head from 'next/head';
import { Brand } from '@/components/Brand';
import colors from '@/styles/colors.module.scss';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A Vida é Bela!!! XD</title>
      </Head>
      <div>
        <Brand />
        <span>Desenvolvedor Web Fullstack</span>
      </div>
      <Link role="button" href="/portifolio/home">
        ir para portifolio
      </Link>

      <Wave
        fill={colors.colorPrimaryDark}
        className={styles.customWave}
        paused={false}
        options={{
          height: 60,
          amplitude: 80,
          speed: 0.15,
          points: 6,
        }}
      />

      <Wave
        fill={colors.colorPrimary}
        className={styles.customWave}
        paused={false}
        options={{
          height: 80,
          amplitude: 60,
          speed: 0.15,
          points: 6,
        }}
      />
    </div>
  );
}

export default Home;
