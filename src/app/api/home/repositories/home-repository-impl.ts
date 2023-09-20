import { Client } from "@notionhq/client";
import HomeRepository from "./home-repository";

class HomeRepositoryImpl implements HomeRepository {
  client: any;
  dataBaseId: string | undefined;
  pageId: string | undefined;

  constructor(client: Client, dataBaseId: string | undefined, pageId: string | undefined) {
    this.client = client;
    this.dataBaseId = dataBaseId;
    this.pageId = pageId;
  }

  async getHomePageData() {
    const homePageData = await this.client.pages.retrieve({
      database_id: this.dataBaseId,
      page_id: this.pageId,
    });

    return homePageData;
  }
}

export default HomeRepositoryImpl;
