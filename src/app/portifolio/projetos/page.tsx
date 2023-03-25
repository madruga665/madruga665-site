import { ProjectSerealized } from "@/interfaces/projectsPage";
import ProjectCard from "@/components/ProjectCard";

import styles from "./styles.module.scss";
import WindowCard from "@/components/WindowCard";
import { getProjectsPageData } from "./projects.service";

export const metadata = {
  title: "Luciano Amâncio - Projetos",
  description: "Projetos desenvolvidos por Luciano Amâncio",
};

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
