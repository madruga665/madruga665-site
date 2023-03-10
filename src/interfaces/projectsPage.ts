export interface Project {
  properties: {
    name: {
      title: Array<{
        plain_text: string;
      }>;
    };
    description: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    tags: {
      multi_select: Array<{
        name: string;
      }>;
    };
    github_repository: {
      url: string;
    };
    production: {
      url: string;
    };
    image: {
      files: Array<{
        file: {
          url: string;
        };
      }>;
    };
  };
}

export interface ProjectSerealized {
  name: string;
  description: string;
  tags: Array<string>;
  githubRepository: string;
  production: string;
  image: string;
}
