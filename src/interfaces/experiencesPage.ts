interface Files {
  name: string;
}

interface RichText {
  plain_text: string;
}

interface Result {
  properties: {
    description: {
      rich_text: Array<RichText>;
    };
    company_img: {
      files: Array<Files>;
    };
    role: {
      title: Array<RichText>;
    };
    company_name: {
      rich_text: Array<RichText>;
    };
    period: {
      rich_text: Array<RichText>;
    };
    year: {
      number: number;
    };
  };
}

export interface ExperiencesPageData {
  results: Array<Result>;
}

export interface TESTE {
  companyImg: string;
  role: string;
  companyName: string;
  period: string;
  description: string;
  year: number;
}

export interface ExperiencesPageProps {
  experiencePageData: Array<TESTE>;
}