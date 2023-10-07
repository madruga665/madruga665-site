import { NextResponse } from "next/server";
import GetHomePageDataUsecase from "./service/home-page-service-impl";
import HomeControllerImpl from "./controller/home-controller-impl";
import NotionAdpter from "./database/notion-adapter";
import HomeRepositoryImpl from "./repositories/home-repository-impl";

export const fetchCache = 'no-store';

export async function GET() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const homePageId = process.env.NOTION_HOME_PAGE_ID;
  const notionToken =  process.env.NOTION_TOKEN;

  const notionAdpter = new NotionAdpter(notionToken);
  const homeRepository = new HomeRepositoryImpl(notionAdpter.connect(), databaseId, homePageId);
  const getHomePageDataUsecase = new GetHomePageDataUsecase(homeRepository);
  const homeController = new HomeControllerImpl(getHomePageDataUsecase);

  try {
    const data = await homeController.getHomePageData();

    return NextResponse.json(data);
  } catch (error) {
    NextResponse.json({ error: "Erro ao requisitar dados da home page" });
  }
}
