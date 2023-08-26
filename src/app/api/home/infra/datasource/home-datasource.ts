import NotionFetchHomePageData from "../../data/types/notion-fetch-home-page-data";

interface HomeDatasource {
  getHomePageData(): Promise<NotionFetchHomePageData>;
}

export default HomeDatasource;