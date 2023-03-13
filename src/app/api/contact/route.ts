import notionClient from "@/lib/notion-client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

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

    return new NextResponse("Success", {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
