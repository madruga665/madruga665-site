import { NextResponse } from 'next/server';
import { NotionAdpter } from '../../infrastructure/database/notion-adapter';
import { ProjectRepository } from './repositories/project-repository';
import { GetProjectsUsecase } from './usecases/get-projects';

const dataSourceId = process.env.NOTION_PROJECTS_DATA_SOURCE_ID || '';
const notionToken = process.env.NOTION_TOKEN || '';

const notionAdpter = new NotionAdpter({ notionToken }).connect();
const projectRepository = new ProjectRepository({
  dataSourceId,
  client: notionAdpter,
});
const getProjectsUsecase = new GetProjectsUsecase(projectRepository);

export async function GET() {
  try {
    const data = await getProjectsUsecase.execute();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao requisitar projetos' }, { status: 500 });
  }
}
