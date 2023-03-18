import { HomeServiceInterface } from "../service/home-service-interface";
import { HomeControllerInterface } from "./home-controller-interface";

export class HomeController implements HomeControllerInterface {
  homeService: HomeServiceInterface;

  constructor(homeService: HomeServiceInterface) {
    this.homeService = homeService;
  }

  async getHomePageData() {
    try {
      const data = this.homeService.getHomePageData();

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
