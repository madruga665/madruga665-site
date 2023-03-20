import { HomePageData } from "@/interfaces/homePage";

interface HomeServiceInterface {
  getHomePageData(): Promise<HomePageData>;
}

export default HomeServiceInterface;
