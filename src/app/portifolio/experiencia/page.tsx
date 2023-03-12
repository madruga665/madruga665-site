import axios from "axios";

import { Experience } from "@/interfaces/experiencesPage";
import Card from "@/components/Card";

import styles from "./styles.module.scss";

export const metadata = {
  title: "Luciano Amâncio - Experiência",
};

async function getExperiencePageData(): Promise<Experience[]>{
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/experiences`);
  const data = await response.data;

  return data;
}

async function Experience() {
  const experiencePageData = await getExperiencePageData();

  return (
    <div className={styles.Container}>
      {experiencePageData.map((experience: Experience) => (
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
  );
}

export default Experience;
