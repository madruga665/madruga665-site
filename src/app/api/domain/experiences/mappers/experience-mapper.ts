import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Experience } from '../entities/experience';

export class ExperienceMapper {
  static toDomain(notionPage: PageObjectResponse): Experience {
    const props = notionPage.properties as any;

    const companyImg =
      props.company_img?.files?.[0]?.external?.url ||
      props.company_img?.files?.[0]?.file?.url ||
      '';
    const role = props.role?.title?.[0]?.plain_text || '';
    const companyName = props.company_name?.rich_text?.[0]?.plain_text || '';
    const period = props.period?.rich_text?.[0]?.plain_text || '';
    const description = props.description?.rich_text?.[0]?.plain_text || '';
    const year = props.year?.number || 0;

    return {
      companyImg,
      role,
      companyName,
      period,
      description,
      year,
    };
  }
}
