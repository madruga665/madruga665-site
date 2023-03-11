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
          <div
            className={styles.ExperienceSection}
            key={experience.companyName}
            style={index % 2 === 0 ? {} : { flexDirection: "row-reverse" }}
          >
            <Card
              img={experience.companyImg}
              headerTitle={experience.role}
              headerSubtitle={experience.companyName}
              headerDate={experience.period}
              description={experience.description}
            />
            <div className={styles.Timeline}>
              <div className={styles.TimelineDot}></div>
            </div>
            <p className={styles.Year}>{experience.year}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}

export default ExperiencesPage;
