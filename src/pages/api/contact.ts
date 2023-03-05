import { NextApiRequest, NextApiResponse } from "next";
import notionClient from "../../lib/notion-client";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

export default async function contactPageHandler(req: NextApiRequest, res: NextApiResponse) {
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
