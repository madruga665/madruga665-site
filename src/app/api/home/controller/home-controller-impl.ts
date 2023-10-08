import UseCase from "../../core/useCase";
import HomePageDataDto from "../dtos/home-page-data";
import HomeControllerInterface from "./home-controller";

type HomeControllerProps = {
  getHomePageDataUsecase: UseCase<void, HomePageDataDto>;
};

class HomeControllerImpl implements HomeControllerInterface {
  private getHomePageDataUsecase: UseCase<void, HomePageDataDto>;

  constructor({ getHomePageDataUsecase }: HomeControllerProps) {
    this.getHomePageDataUsecase = getHomePageDataUsecase;
  }

  async getHomePageData() {
    return await this.getHomePageDataUsecase.execute();
  }
}

export default HomeControllerImpl;
