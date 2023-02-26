import { NextApiRequest, NextApiResponse } from "next";
import notionClient from "../../lib/notion-client";

async function getHomePageData(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const homePage = await notionClient.pages.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
      page_id: "e3d05fb599c24fa98a346d67b3c9f956",
    });

    const data = {
      presentation: homePage.properties.description.rich_text[0].text.content,
      image: homePage.properties.image.files[0].name,
    };

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

export default getHomePageData;
