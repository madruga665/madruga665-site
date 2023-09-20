import HomePage from "../models/home-page";

interface HomePageService {
  getHomePageData(): Promise<HomePage>;
}

export default HomePageService;