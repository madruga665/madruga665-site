import axios from "axios";

import { ExperiencesPageProps } from "../../interfaces/experiencesPage";
import ExperiencesPage from "../../page-components/ExperiencesPage";

function Experiences({ experiencePageData }: ExperiencesPageProps) {
  return <ExperiencesPage experiencePageData={experiencePageData}/>;
}

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/experiences`);
  const experiencePageData = await response.data;

  return {
    props: {
      experiencePageData,
    },
  };
}

export default Experiences;
