import { NextApiRequest, NextApiResponse } from "next";
import { Project, ProjectSerealized } from "../../interfaces/projectsPage";

import notionClient from "../../lib/notion-client";

async function projectsPageHandler(req: NextApiRequest, res: NextApiResponse) {
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
        image: project.properties.image.files[0]?.file.url,
      };
    });

    const filterUndefinedObjects = response.filter((item: ProjectSerealized) => {
      const checkObjectisUndefined = Object.values(item).every(
        (value) => value === undefined || value === null || value.length === 0
      );

      return !checkObjectisUndefined;
    });

    res.status(200).json(filterUndefinedObjects);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default projectsPageHandler;
