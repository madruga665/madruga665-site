import Link from "next/link";
import styles from "./styles.module.scss";
import Brand from "../../components/Brand";
import Wave from "react-wavify";
import colors from "../../styles/colors.module.scss";
import Head from "next/head";

function IntroductionPage() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>A vida é bela!!! XD</title>
      </Head>
      <div>
        <Brand withLogo />
        <span>Desenvolvedor Web Fullstack</span>
      </div>
      <Link href='/portifolio/home'>ir para portifolio</Link>

      <Wave
        fill={colors.colorNephritis}
        className={styles.CustomWave}
        paused={false}
        options={{
          height: 60,
          amplitude: 80,
          speed: 0.15,
          points: 6,
        }}
      />

      <Wave
        fill={colors.colorEmerald}
        className={styles.CustomWave}
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

export default IntroductionPage;
