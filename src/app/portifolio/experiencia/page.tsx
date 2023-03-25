import { Experience } from "@/interfaces/experiencesPage";
import { getExperiencePageData } from "./experience.service";
import Card from "@/components/Card";

import styles from "./styles.module.scss";
import WindowCard from "@/components/WindowCard";

export const metadata = {
  title: "Luciano Amâncio - Experiência",
};

async function Experience() {
  const experiencePageData = await getExperiencePageData();

  return (
    <div className={styles.container}>
      {experiencePageData.map((experience: Experience) => (
        <WindowCard key={experience.companyName}>
          <Card
            img={experience.companyImg}
            headerTitle={experience.role}
            headerSubtitle={experience.companyName}
            headerDate={experience.period}
            description={experience.description}
          />
        </WindowCard>
      ))}
    </div>
  );
}

export default Experience;
