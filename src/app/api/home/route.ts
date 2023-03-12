import { NextResponse } from "next/server";

import { HomePageData } from "@/interfaces/homePage";
import notionClient from "@/lib/notion-client";
import NotionService from "../notion.service";

export async function GET() {
  try {
    const homePageData: HomePageData = await notionClient.pages.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
      page_id: process.env.NOTION_HOME_PAGE_ID,
    });

    const data = NotionService.getHomePageData(homePageData);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
