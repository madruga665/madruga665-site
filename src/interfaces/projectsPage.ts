export interface ProjectSerealized {
  name: string;
  description: string;
  tags: Array<string>;
  githubRepository: string;
  production: string;
  image?: string;
  is_active?: boolean;
}
