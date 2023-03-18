import { HomePageData } from "@/interfaces/homePage";

export interface HomeControllerInterface {
  getHomePageData(): Promise<HomePageData>;
}
