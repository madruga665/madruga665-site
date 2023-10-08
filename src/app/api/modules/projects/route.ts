import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { Project, ProjectSerealized } from "@/interfaces/projectsPage";
import notionClient from "@/lib/notion-client";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "";
  revalidatePath(path);

  try {
    const projectsPageData = await notionClient.databases.query({
      database_id: process.env.NOTION_PROJECTS_DATABASE_ID,
    });

    const response = projectsPageData.results.map((project: Project): ProjectSerealized => {
      return {
        name: project.properties.name.title[0]?.plain_text,
        description: project.properties.description.rich_text[0]?.plain_text,
        tags: project.properties.tags.multi_select.map((tag: any) => tag.name),
        githubRepository: project.properties.github_repository.url,
        production: project.properties.production.url,
        image: project.properties.image.files[0]?.external.url,
      };
    });

    const filterUndefinedObjects = response.filter((item: ProjectSerealized) => {
      const checkObjectisUndefined = Object.values(item).every(
        (value) => value === undefined || value === null || value.length === 0
      );

      return !checkObjectisUndefined;
    });

    return NextResponse.json(filterUndefinedObjects);
  } catch (error) {
    console.log(error);
    NextResponse.error();
  }
}
