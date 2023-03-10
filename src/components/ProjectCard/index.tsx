import Image from "next/image";
import { ProjectSerealized } from "../../interfaces/projectsPage";
import LinkButton from "../LinkButton";
import styles from "./styles.module.scss";

function ProjectCard(project: ProjectSerealized) {
  return (
    <div className={styles.Card}>
      <header>
        <Image src={project.image} alt={project.name} width={500} height={500} priority />
      </header>
      <div className={styles.Content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.Tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.Tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <footer>
        <LinkButton url={project.githubRepository}>Repositório no Github</LinkButton>
        <LinkButton url={project.production}>Ver o projeto</LinkButton>
      </footer>
    </div>
  );
}

export default ProjectCard;
