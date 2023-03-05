import { NextApiRequest, NextApiResponse } from "next";

import { HomePageData } from "../../interfaces/homePage";
import notionClient from "../../lib/notion-client";
import NotionService from "./notion.service";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

async function notionHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
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

  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      await notionClient.pages.create({
        parent: {
          database_id: process.env.NOTION_CONTACT_DATABASE_ID,
        },
        properties: {
          name: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          email: {
            email: email,
          },
          message: {
            rich_text: [
              {
                text: {
                  content: message,
                },
              },
            ],
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default notionHandler;
