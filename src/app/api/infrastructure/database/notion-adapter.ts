import { Client } from '@notionhq/client';
import DatabaseConnection from './database-connection';

type NotionAdpterProps = {
  notionToken: string;
};

export class NotionAdpter implements DatabaseConnection {
  private notionToken: string;
  private client: Client;

  constructor({ notionToken }: NotionAdpterProps) {
    this.notionToken = notionToken;
    this.client = new Client({ auth: this.notionToken });
  }

  connect() {
    return this.client;
  }
}
