import axios from "axios";
import HomePage from "../HomePage";
import { Suspense } from "react";
import Loading from "../../components/Loading/loading";

interface hompePageProps {
  homePageData: {
    presentation: string;
    image: string;
  };
}

function Home({ homePageData }: hompePageProps) {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage image={homePageData.image} presentation={homePageData.presentation} />
    </Suspense>
  );
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
