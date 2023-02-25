import { NextApiRequest, NextApiResponse } from "next";

const { Client } = require("@notionhq/client");

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getHomePageData = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const homePage = await notionClient.pages.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
      page_id: "e3d05fb599c24fa98a346d67b3c9f956",
    });
    res.status(200).json(homePage.properties.presentation.rich_text[0].text.content);
  } catch (error) {
    console.log(error);
  }
};

export default getHomePageData;
