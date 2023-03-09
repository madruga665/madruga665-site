import Head from "next/head";
import Card from "../../components/Card";
import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

function ExperiencesPage({ experiencePageData }: any) {
  return (
    <PageTemplate>
      <Head>
        <title>Luciano Amâncio - Sobre</title>
      </Head>
      <div className={styles.Container}>
        {experiencePageData.map((experience: any, index: number) => (
          <div className={styles.ExperienceSection} style={index % 2 === 0 ? {flexDirection: 'row-reverse'}: {}}>
            <Card
              key={index}
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
