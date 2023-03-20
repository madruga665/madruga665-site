import notionClient from "@/lib/notion-client";
import HomeRepositoryInterface from "./home-repository-interface";

class HomeRepository implements HomeRepositoryInterface {
  async getHomePageData() {
    const homePageData = await notionClient.pages.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
      page_id: process.env.NOTION_HOME_PAGE_ID,
    });

    return homePageData;
  }
}

export default HomeRepository;
