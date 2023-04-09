interface RichText {
  text: {
    content: string;
  };
}

interface Files {
  name: string;
}

interface ExternalFiles {
  external: {
    url: string;
  };
}

export interface Icon {
  name: string;
  external: {
    url: string;
  };
  link: string;
}

export interface IconSerealized {
  name: string;
  link: string;
  iconImg: string;
}

export interface NotionFetchHomePageData {
  properties: {
    description: {
      rich_text: Array<RichText>;
      presentation: string;
    };
    curriculo: {
      files: Array<ExternalFiles>;
    };
    image: {
      files: Array<Files>;
    };
    instagram: {
      url: string;
    };
    linkedin: {
      url: string;
    };
    facebook: {
      url: string;
    };
    github: {
      url: string;
    };
    social_icons: {
      files: Array<Icon>;
    };
  };
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  facebook: string;
}

export interface HomePageData {
  presentation: string;
  image: string;
  socialIcons: Array<IconSerealized>;
  curriculo: string;
}
