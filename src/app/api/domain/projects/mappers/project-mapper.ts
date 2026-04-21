import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Project } from '../entities/project';

export class ProjectMapper {
  static toDomain(notionPage: PageObjectResponse): Project {
    const props = notionPage.properties as any;

    const name = props.name?.title?.[0]?.plain_text || '';
    const description = props.description?.rich_text?.[0]?.plain_text || '';
    const tags = props.tags?.multi_select?.map((tag: any) => tag.name) || [];
    const githubRepository = props.github_repository?.url || '';
    const production = props.production?.url || '';
    const image =
      props.image?.files?.[0]?.external?.url ||
      props.image?.files?.[0]?.file?.url ||
      '';

    return {
      name,
      description,
      tags,
      githubRepository,
      production,
      image,
    };
  }
}
