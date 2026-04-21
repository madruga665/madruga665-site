import { Client } from '@notionhq/client';

interface DatabaseConnection {
  connect(): Client;
}

export default DatabaseConnection;
