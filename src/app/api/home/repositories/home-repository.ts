import NotionFetchHomePageData from "../types/notion-fetch-home-page-data";

interface HomeRepository {
  getHomePageData(): Promise<NotionFetchHomePageData>;
}

export default HomeRepository;
