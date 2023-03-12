import axios from "axios";

import { ProjectSerealized } from "@/interfaces/projectsPage";
import ProjectCard from "@/components/ProjectCard";

import styles from "./styles.module.scss";

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
    <div className={styles.Container}>
      {projects.map((project: ProjectSerealized) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}

export default Projects;
