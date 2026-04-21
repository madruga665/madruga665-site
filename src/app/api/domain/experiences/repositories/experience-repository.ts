import { Client, isFullPage } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Experience } from '../entities/experience';
import { ExperienceMapper } from '../mappers/experience-mapper';

type ExperienceRepositoryProps = {
  client: Client;
  dataSourceId: string;
};

export class ExperienceRepository {
  private client: Client;
  private dataSourceId: string;

  constructor({ client, dataSourceId }: ExperienceRepositoryProps) {
    this.client = client;
    this.dataSourceId = dataSourceId;
  }

  async getExperiences(): Promise<Experience[]> {
    // Nesta versão do SDK (v5.19.0), o método query foi movido para dataSources
    const response = await (this.client as any).dataSources.query({
      data_source_id: this.dataSourceId,
      sorts: [
        {
          property: 'year',
          direction: 'ascending',
        },
      ],
    });

    const experiences = response.results
      .filter(isFullPage)
      .map((page: any) => ExperienceMapper.toDomain(page as PageObjectResponse));

    return experiences;
  }
}
