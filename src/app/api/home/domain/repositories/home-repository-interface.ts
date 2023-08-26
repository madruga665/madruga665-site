import NotionFetchHomePageData from "../../data/types/notion-fetch-home-page-data";


interface HomeRepositoryInterface {
  getHomePageData(): Promise<NotionFetchHomePageData>;
}

export default HomeRepositoryInterface;
