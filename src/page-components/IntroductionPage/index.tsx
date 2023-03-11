'use client';
import Link from "next/link";
import Wave from "react-wavify";

import Brand from "@/components/Brand";

import colors from "@/styles/colors.module.scss";
import styles from "./styles.module.scss";


function IntroductionPage() {
  return (
    <div className={styles.Container}>
      <div>
        <Brand withLogo />
        <span>Desenvolvedor Web Fullstack</span>
      </div>
      <Link role='button' href='/portifolio/home'>
        ir para portifolio
      </Link>

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
