import axios from "axios";

import { ProjectSerealized } from "@/interfaces/projectsPage";
import ProjectCard from "@/components/ProjectCard";

import styles from "./styles.module.scss";

export const metadata = {
  title: "Luciano Amâncio - Projetos",
  description: "Projetos desenvolvidos por Luciano Amâncio",
};

async function Projects() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`);
  const projects = await response.data;

  return (
    <div className={styles.Container}>
      {projects.map((project: ProjectSerealized) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}

export default Projects;
