import { HomePageData } from "@/interfaces/homePage";

interface HomeControllerInterface {
  getHomePageData(): Promise<HomePageData>;
}

export default HomeControllerInterface;
