import { NotionFetchHomePageData } from "@/interfaces/homePage";

export interface HomeRepositoryInterface {
  getHomePageData(): Promise<NotionFetchHomePageData>;
}
