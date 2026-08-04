import { NotionAdpter } from '@/app/api/infrastructure/database/notion-adapter';
import { ProjectRepository } from '@/app/api/domain/projects/repositories/project-repository';
import { GetProjectsUsecase } from '@/app/api/domain/projects/usecases/get-projects';
import { ProjectSerealized } from '@/interfaces/projectsPage';

export async function getProjectsPageData(): Promise<ProjectSerealized[]> {
  if (typeof window === 'undefined') {
    const dataSourceId = process.env.NOTION_PROJECTS_DATA_SOURCE_ID || '';
    const notionToken = process.env.NOTION_TOKEN || '';

    const notionAdpter = new NotionAdpter({ notionToken }).connect();
    const projectRepository = new ProjectRepository({
      dataSourceId,
      client: notionAdpter,
    });
    const getProjectsUsecase = new GetProjectsUsecase(projectRepository);

    return await getProjectsUsecase.execute();
  }

  const response = await fetch('/api/domain/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data: ProjectSerealized[] = await response.json();

  return data;
}
