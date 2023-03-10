import axios from "axios";
import { ProjectSerealized } from "../../interfaces/projectsPage";
import ProjectsPage from "../../page-components/ProjectsPage";

function Projects({ projects }: { projects: Array<ProjectSerealized> }) {
  return <ProjectsPage projects={projects} />;
}

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`);
  const data = await response.data;

  return {
    props: {
      projects: data,
    },
  };
}

export default Projects;
