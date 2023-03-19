import axios from "axios";

import { ProjectSerealized } from "@/interfaces/projectsPage";
import ProjectCard from "@/components/ProjectCard";

import styles from "./styles.module.scss";
import WindowCard from "@/components/WindowCard";

export const metadata = {
  title: "Luciano Amâncio - Projetos",
  description: "Projetos desenvolvidos por Luciano Amâncio",
};

async function getProjectsPageData(): Promise<ProjectSerealized[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`);
  const data = await response.data;

  return data;
}

async function Projects() {
  const projects = await getProjectsPageData();

  return (
    <div className={styles.container}>
      {projects.map((project: ProjectSerealized) => (
        <WindowCard key={project.name}>
          <ProjectCard {...project} />
        </WindowCard>
      ))}
    </div>
  );
}

export default Projects;
