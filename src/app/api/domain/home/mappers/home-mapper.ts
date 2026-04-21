import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { HomePageData } from '../entities/home-page-data';
import { SerealizedIcon } from '../entities/serealized-icon';

export class HomeMapper {
  static toDomain(notionPage: PageObjectResponse): HomePageData {
    const props = notionPage.properties;

    // Helper para extrair texto rico (propriedades do tipo 'rich_text')
    const getRichText = (prop: any) => {
      if (prop?.type === 'rich_text') {
        return prop.rich_text?.[0]?.plain_text || prop.rich_text?.[0]?.text?.content || '';
      }
      return '';
    };

    // Helper para extrair URL de arquivo (propriedades do tipo 'files')
    const getFileUrl = (prop: any) => {
      if (prop?.type === 'files') {
        const file = prop.files?.[0];
        return file?.external?.url || file?.file?.url || '';
      }
      return '';
    };

    // Helper para extrair nome de arquivo
    const getFileName = (prop: any) => {
      if (prop?.type === 'files') {
        return prop.files?.[0]?.name || '';
      }
      return '';
    };

    return {
      presentation: getRichText(props.description),
      image: getFileName(props.image),
      curriculo: getFileUrl(props.curriculo),
      socialIcons: this.serializeSocialIcons(notionPage),
    };
  }

  private static serializeSocialIcons(notionPage: PageObjectResponse): SerealizedIcon[] {
    const props = notionPage.properties;

    // Acessando propriedades dinâmicas com segurança através de cast genérico controlado
    const socialIconsProp = props.social_icons as any;
    const icons = socialIconsProp?.files || [];

    const getUrl = (prop: any) => (prop?.type === 'url' ? prop.url : '');

    const socialLinks: Record<string, string> = {
      linkedin: getUrl(props.linkedin),
      github: getUrl(props.github),
      instagram: getUrl(props.instagram),
      facebook: getUrl(props.facebook),
    };

    return icons.map((icon: any) => {
      const name = (icon.name || '').toLowerCase();
      let link = '';

      if (name.includes('linkedin')) link = socialLinks.linkedin;
      else if (name.includes('github')) link = socialLinks.github;
      else if (name.includes('instagram')) link = socialLinks.instagram;
      else if (name.includes('facebook')) link = socialLinks.facebook;

      return {
        name: icon.name || 'Social Icon',
        link: link,
        iconImg: icon.external?.url || icon.file?.url || '',
      };
    });
  }
}
