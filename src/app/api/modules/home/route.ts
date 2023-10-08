import { NextResponse } from "next/server";
import NotionAdpter from "../../core/database/notion-adapter";
import HomeControllerImpl from "./adapters/controller/home-controller-impl";
import HomeRepositoryImpl from "./adapters/repositories/home-repository-impl";
import GetHomePageDataUsecase from "./application/usecases/get-home-page-data";

export const revalidate = true;

export async function GET() {
  const databaseId = process.env.NOTION_DATABASE_ID || "";
  const homePageId = process.env.NOTION_HOME_PAGE_ID || "";
  const notionToken = process.env.NOTION_TOKEN || "";

  const notionAdpter = new NotionAdpter({ notionToken }).connect();
  const homeRepository = new HomeRepositoryImpl({
    homePageId: homePageId,
    databaseId: databaseId,
    client: notionAdpter,
  });
  const getHomePageDataUsecase = new GetHomePageDataUsecase(homeRepository);
  const homeController = new HomeControllerImpl({ getHomePageDataUsecase: getHomePageDataUsecase });

  try {
    const data = await homeController.getHomePageData();

    return NextResponse.json(data);
  } catch (error) {
    NextResponse.json({ error: "Erro ao requisitar dados da home page" });
  }
}
