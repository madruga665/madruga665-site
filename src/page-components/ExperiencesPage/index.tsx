import Head from "next/head";

import { Experience, ExperiencesPageProps } from "@/interfaces/experiencesPage";
import Card from "@/components/Card";
import PageTemplate from "@/templates/PageTemplate";

import styles from "./styles.module.scss";

function ExperiencesPage({ experiencePageData }: ExperiencesPageProps) {
  return (
    <PageTemplate>
      <Head>
        <title>Luciano Amâncio - Experiências</title>
      </Head>
      <div className={styles.Container}>
        {experiencePageData.map((experience: Experience, index: number) => (
          <Card
            key={experience.companyName}
            img={experience.companyImg}
            headerTitle={experience.role}
            headerSubtitle={experience.companyName}
            headerDate={experience.period}
            description={experience.description}
          />
        ))}
      </div>
    </PageTemplate>
  );
}

export default ExperiencesPage;
