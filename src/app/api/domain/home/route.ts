import { NextResponse } from 'next/server';
import { NotionAdpter } from '../../infrastructure/database/notion-adapter';
import { HomeRepository } from './repositories/home-repository';
import { GetHomePageDataUsecase } from './usecases/get-home-page-data';

const homePageId = process.env.NOTION_HOME_PAGE_ID || '';
const notionToken = process.env.NOTION_TOKEN || '';

const notionAdpter = new NotionAdpter({ notionToken }).connect();
const homeRepository = new HomeRepository({
  homePageId: homePageId,
  client: notionAdpter,
});
const getHomePageDataUsecase = new GetHomePageDataUsecase(homeRepository);

export async function GET() {
  try {
    const data = await getHomePageDataUsecase.execute();

    return NextResponse.json(data);
  } catch (error) {
    NextResponse.json({ error: 'Erro ao requisitar dados da home page' });
  }
}
