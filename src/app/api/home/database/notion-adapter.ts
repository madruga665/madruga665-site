import { Client } from "@notionhq/client";
import DatabaseConnection from "./database-connection";

class NotionAdpter implements DatabaseConnection {
  notionToken: string | undefined;

  constructor(notionToken: string | undefined) {
    this.notionToken = notionToken;
  }

  connect() {
    return new Client({ auth: this.notionToken });
  }
}

export default NotionAdpter;