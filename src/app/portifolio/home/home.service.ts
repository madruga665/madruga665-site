import { NotionAdpter } from '@/app/api/infrastructure/database/notion-adapter';
import { HomeRepository } from '@/app/api/domain/home/repositories/home-repository';
import { GetHomePageDataUsecase } from '@/app/api/domain/home/usecases/get-home-page-data';
import { HomePageData } from '@/interfaces/homePage';

export async function getHomePageData(): Promise<HomePageData> {
  if (typeof window === 'undefined') {
    const homePageId = process.env.NOTION_HOME_PAGE_ID || '';
    const notionToken = process.env.NOTION_TOKEN || '';

    const notionAdpter = new NotionAdpter({ notionToken }).connect();
    const homeRepository = new HomeRepository({
      homePageId,
      client: notionAdpter,
    });
    const getHomePageDataUsecase = new GetHomePageDataUsecase(homeRepository);

    return await getHomePageDataUsecase.execute();
  }

  const response = await fetch('/api/domain/home', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  const data: HomePageData = await response.json();

  return data;
}
