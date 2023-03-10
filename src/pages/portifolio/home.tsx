import axios from "axios";
import { HomePageProps } from "../../interfaces/homePage";
import HomePage from "../../page-components/HomePage";

function Home({ homePageData }: HomePageProps) {
  return <HomePage homePageData={homePageData}/>;
}

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home`);
  const homePageData = await response.data;

  return {
    props: {
      homePageData,
    },
  };
}

export default Home;
