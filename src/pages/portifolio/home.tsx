import axios from "axios";
import HomePage from "../HomePage";

interface hompePageProps {
  homePageData: {
    presentation: string;
    image: string;
  }
}

export async function getStaticProps() {
  const response = await axios.get("https://madruga665.vercel.app/api/notion");
  const homePageData = await response.data;
  return {
    props: {
      homePageData,
    },
  };
}

function Home({homePageData}: hompePageProps) {
  return <HomePage homePageData={homePageData} />;
}


export default Home;
