interface RichText {
  text: {
    content: string;
  };
}

interface Files {
  name: string;
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
  };
}


export interface HomePageProps {
  presentation: string;
  image: string;
}