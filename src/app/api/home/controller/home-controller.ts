import HomePageDataDto from "../dtos/home-page-data";


interface HomeController {
  getHomePageData(): Promise<HomePageDataDto>;
}

export default HomeController;
