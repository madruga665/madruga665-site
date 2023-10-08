type RichText = {
  text: {
    content: string;
  };
}

type Files = {
  name: string;
}

type ExternalFiles = {
  external: {
    url: string;
  };
}

type Icon = {
  name: string;
  external: {
    url: string;
  };
  link: string;
}

type NotionFetchHomePageData = {
  properties: {
    description: {
      rich_text: RichText[];
      presentation: string;
    };
    curriculo: {
      files: ExternalFiles[];
    };
    image: {
      files: Files[];
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
      files: Icon[];
    };
  };
}

export default NotionFetchHomePageData;