import Head from "next/head";

import ProjectCard from "../../components/ProjectCard";
import { ProjectSerealized } from "../../interfaces/projectsPage";
import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

function ProjectsPage({ projects }: { projects: Array<ProjectSerealized> }) {
  return (
    <PageTemplate>
      <Head>
        <title>Luciano Amâncio - Projetos</title>
      </Head>
      <div className={styles.Container}>
        {projects.map((project: ProjectSerealized) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </PageTemplate>
  );
}

export default ProjectsPage;
