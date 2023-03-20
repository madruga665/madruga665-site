import HomeServiceInterface from "../service/home-service-interface";
import HomeControllerInterface from "./home-controller-interface";

class HomeController implements HomeControllerInterface {
  homeService: HomeServiceInterface;

  constructor(homeService: HomeServiceInterface) {
    this.homeService = homeService;
  }

  async getHomePageData() {
    const data = await this.homeService.getHomePageData();

    return data;
  }
}

export default HomeController;
