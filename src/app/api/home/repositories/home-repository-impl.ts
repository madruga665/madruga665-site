import HomeRepository from "./home-repository";

type HomeRepositoryProps = {
  client: any;
  databaseId: string;
  homePageId: string;
};

class HomeRepositoryImpl implements HomeRepository {
  client: any;
  databaseId: string;
  homePageId: string;

  constructor({ client, databaseId, homePageId }: HomeRepositoryProps) {
    this.client = client;
    this.databaseId = databaseId;
    this.homePageId = homePageId;
  }

  async getHomePageData() {
    const homePageData = await this.client.pages.retrieve({
      database_id: this.databaseId,
      page_id: this.homePageId,
    });

    return homePageData;
  }
}

export default HomeRepositoryImpl;
