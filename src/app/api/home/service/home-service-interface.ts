import { HomePageData, IconSerealized, NotionFetchHomePageData } from "@/interfaces/homePage";

export interface HomeServiceInterface {
  getHomePageData(): Promise<HomePageData>;
}
