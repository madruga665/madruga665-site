interface RichText {
  text: {
    content: string;
  };
}

interface Files {
  name: string;
}

export interface Icon {
  name: string;
  file: {
    url: string;
  };
  link: string;
}

export interface IconSerealized {
  name: string;
  link: string;
  iconImg: string;
}

export interface HomePageData {
  properties: {
    description: {
      rich_text: Array<RichText>;
      presentation: string;
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

export interface HomePageProps {
  presentation: string;
  image: string;
  socialIcons: Array<IconSerealized>;
}
