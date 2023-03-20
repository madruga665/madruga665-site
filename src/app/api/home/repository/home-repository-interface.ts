import { NotionFetchHomePageData } from "@/interfaces/homePage";

interface HomeRepositoryInterface {
  getHomePageData(): Promise<NotionFetchHomePageData>;
}

export default HomeRepositoryInterface;
