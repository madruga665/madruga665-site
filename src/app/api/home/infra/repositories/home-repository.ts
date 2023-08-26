
import HomeRepositoryInterface from "../../domain/repositories/home-repository-interface";
import HomeDatasource from "../datasource/home-datasource";


class HomeRepository implements HomeRepositoryInterface {
  homeDatasource: HomeDatasource;

  constructor(homeDatasource: HomeDatasource) {
    this.homeDatasource = homeDatasource;
  }

  async getHomePageData() {
    const homePageData = this.homeDatasource.getHomePageData();

    return homePageData;
  }
}

export default HomeRepository;
