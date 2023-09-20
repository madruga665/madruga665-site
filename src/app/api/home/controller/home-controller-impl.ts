import GetHomePageDataUsecase from "../service/home-page-service-impl";
import HomeControllerInterface from "./home-controller";


class HomeControllerImpl implements HomeControllerInterface {
  getHomePageDataUsecase: GetHomePageDataUsecase;

  constructor(getHomePageDataUsecase: GetHomePageDataUsecase) {
    this.getHomePageDataUsecase = getHomePageDataUsecase;
  }

  async getHomePageData() {
    return await this.getHomePageDataUsecase.getHomePageData();
  }
}

export default HomeControllerImpl;
