
import GetHomePageDataUsecase from "../../domain/usecases/get-home-page-data-usecase";
import HomeControllerInterface from "./home-controller-interface";


class HomeController implements HomeControllerInterface {
  getHomePageDataUsecase: GetHomePageDataUsecase;

  constructor(getHomePageDataUsecase: GetHomePageDataUsecase) {
    this.getHomePageDataUsecase = getHomePageDataUsecase;
  }

  async getHomePageData() {
    return await this.getHomePageDataUsecase.execute();
  }
}

export default HomeController;
