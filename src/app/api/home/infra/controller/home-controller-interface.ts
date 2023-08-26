import HomePageData from "../../data/types/home-page-data";


interface HomeControllerInterface {
  getHomePageData(): Promise<HomePageData>;
}

export default HomeControllerInterface;
