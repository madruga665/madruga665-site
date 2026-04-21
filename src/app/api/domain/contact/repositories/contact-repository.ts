import { Client } from '@notionhq/client';
import { Contact } from '../entities/contact';
import { ContactMapper } from '../mappers/contact-mapper';

type ContactRepositoryProps = {
  client: Client;
  dataSourceId: string;
};

export class ContactRepository {
  private client: Client;
  private dataSourceId: string;

  constructor({ client, dataSourceId }: ContactRepositoryProps) {
    this.client = client;
    this.dataSourceId = dataSourceId;
  }

  async create(contact: Contact): Promise<void> {
    await this.client.pages.create({
      parent: {
        data_source_id: this.dataSourceId,
      },
      properties: ContactMapper.toNotion(contact),
    });
  }
}
