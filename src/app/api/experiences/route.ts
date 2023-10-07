import { NextResponse } from "next/server";

import { ExperiencesPageData } from "@/interfaces/experiencesPage";
import notionClient from "@/lib/notion-client";
import NotionService from "../notion.service";

export const fetchCache = 'default-no-store';

export async function GET() {
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

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
