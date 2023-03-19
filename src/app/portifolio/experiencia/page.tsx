import axios from "axios";

import { Experience } from "@/interfaces/experiencesPage";
import Card from "@/components/Card";

import styles from "./styles.module.scss";
import WindowCard from "@/components/WindowCard";

export const metadata = {
  title: "Luciano Amâncio - Experiência",
};

async function getExperiencePageData(): Promise<Experience[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/experiences`);
  const data = await response.data;

  return data;
}

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
