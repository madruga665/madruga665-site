import GetHomePageDataUsecase from "../usecases/get-home-page-data-usecase";
import HomeControllerInterface from "./home-controller";


class HomeControllerImpl implements HomeControllerInterface {
  getHomePageDataUsecase: GetHomePageDataUsecase;

  constructor(getHomePageDataUsecase: GetHomePageDataUsecase) {
    this.getHomePageDataUsecase = getHomePageDataUsecase;
  }

  async getHomePageData() {
    return await this.getHomePageDataUsecase.execute();
  }
}

export default HomeControllerImpl;
