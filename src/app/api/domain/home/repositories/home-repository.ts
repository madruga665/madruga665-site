import { Client, isFullPage } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { HomePageData } from '../entities/home-page-data';
import { HomeMapper } from '../mappers/home-mapper';

type HomeRepositoryProps = {
  client: Client;
  homePageId: string;
};

export class HomeRepository {
  private client: Client;
  private homePageId: string;

  constructor({ client, homePageId }: HomeRepositoryProps) {
    this.client = client;
    this.homePageId = homePageId;
  }

  async getHomePageData(): Promise<HomePageData> {
    const response = await this.client.pages.retrieve({
      page_id: this.homePageId,
    });

    if (!isFullPage(response)) {
      throw new Error('A página retornada pelo Notion é parcial ou inválida.');
    }

    return HomeMapper.toDomain(response as PageObjectResponse);
  }
}
