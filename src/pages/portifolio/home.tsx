import axios from "axios";
import HomePage from "../../page-components/HomePage";

interface hompePageProps {
  homePageData: {
    presentation: string;
    image: string;
  };
}

function Home({ homePageData }: hompePageProps) {
  return <HomePage image={homePageData.image} presentation={homePageData.presentation} />;
}

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.API_BASE_URL}/api/notion`);
  const homePageData = await response.data;
  return {
    props: {
      homePageData,
    },
  };
}

export default Home;
