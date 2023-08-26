import { NextResponse } from "next/server";
import GetHomePageDataUsecase from "./domain/usecases/get-home-page-data-usecase";
import HomeDatasourceImpl from "./data/datasources/home-datasource-impl";
import HomeRepository from "./infra/repositories/home-repository";
import HomeController from "./infra/controller/home-controller";
import { Client } from "@notionhq/client";

export async function GET() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const homePageId = process.env.NOTION_HOME_PAGE_ID;
  const notionClient = new Client({ auth: process.env.NOTION_TOKEN});
  const homeDatasource = new HomeDatasourceImpl(notionClient, databaseId, homePageId);
  const homeRepository = new HomeRepository(homeDatasource);
  const getHomePageDataUsecase = new GetHomePageDataUsecase(homeRepository);
  const homeController = new HomeController(getHomePageDataUsecase);

  try {
    const data = await homeController.getHomePageData();

    return NextResponse.json(data);
  } catch (error) {
    NextResponse.json({ error: "Erro ao requisitar dados da home page" });
  }
}
