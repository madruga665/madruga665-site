import NotionFetchHomePageData from "../../domain/types/notion-fetch-home-page-data";

interface HomeRepository {
  getHomePageData(): Promise<NotionFetchHomePageData>;
}

export default HomeRepository;
