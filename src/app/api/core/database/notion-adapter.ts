import { Client } from "@notionhq/client";
import DatabaseConnection from "@/app/api/core/database-connection";

type NotionAdpterProps = {
  notionToken: string;
};

class NotionAdpter implements DatabaseConnection {
  notionToken: string;
  client: Client;

  constructor({ notionToken }: NotionAdpterProps) {
    this.notionToken = notionToken;
    this.client = new Client({ auth: this.notionToken });
  }

  connect() {
    return this.client;
  }
}

export default NotionAdpter;
