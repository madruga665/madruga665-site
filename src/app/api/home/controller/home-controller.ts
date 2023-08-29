import HomePageData from "../types/home-page-data";

interface HomeController {
  getHomePageData(): Promise<HomePageData>;
}

export default HomeController;
