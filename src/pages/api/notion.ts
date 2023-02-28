import { NextApiRequest, NextApiResponse } from "next";
import { HomePageData } from "../../interfaces/homePage";
import notionClient from "../../lib/notion-client";
import NotionService from "./notion.service";

async function getHomePageData(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const homePageData: HomePageData = await notionClient.pages.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
      page_id: process.env.NOTION_HOME_PAGE_ID,
    });

    const data = NotionService.getHomePageData(homePageData);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getHomePageData;
