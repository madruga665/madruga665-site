import { NextApiRequest, NextApiResponse } from "next";

import { ExperiencesPageData } from "../../interfaces/experiencesPage";
import notionClient from "../../lib/notion-client";
import NotionService from "./notion.service";

async function experiencesPageHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const experiencesPageData: ExperiencesPageData = await notionClient.databases.query({
      database_id: process.env.NOTION_EXPERIENCE_DATABASE_ID,
      sorts: [
        {
          property: "year",
          direction: "ascending",
        },
      ],
    });

    const data = NotionService.getExperiencePageData(experiencesPageData);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default experiencesPageHandler;
