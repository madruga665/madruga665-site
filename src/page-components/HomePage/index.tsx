import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { HomePageProps, IconSerealized } from "../../interfaces/homePage";
import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

function HomePage({ presentation, socialIcons, image }: HomePageProps) {

  return (
    <PageTemplate>
      <Head>
        <title>Luciano Amâncio - Home</title>
      </Head>
    </PageTemplate>
  );
}

export default HomePage;
