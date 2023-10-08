import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ExperiencesPageData } from "@/interfaces/experiencesPage";
import notionClient from "@/lib/notion-client";
import NotionService from "../../core/notion.service";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "";
  revalidatePath(path);

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
