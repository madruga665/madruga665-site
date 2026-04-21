import { Client, isFullPage } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Project } from '../entities/project';
import { ProjectMapper } from '../mappers/project-mapper';

type ProjectRepositoryProps = {
  client: Client;
  datasourceId: string;
};

export class ProjectRepository {
  private client: Client;
  private datasourceId: string;

  constructor({ client, datasourceId }: ProjectRepositoryProps) {
    this.client = client;
    this.datasourceId = datasourceId;
  }

  async getProjects(): Promise<Project[]> {
    const response = await this.client.dataSources.query({
      data_source_id: this.datasourceId,
    });

    const projects = response.results
      .filter(isFullPage)
      .map((page: PageObjectResponse) => ProjectMapper.toDomain(page));

    return projects;
  }
}
