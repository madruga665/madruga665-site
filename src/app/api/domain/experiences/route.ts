import { NextResponse } from 'next/server';
import { NotionAdpter } from '../../infrastructure/database/notion-adapter';
import { ExperienceRepository } from './repositories/experience-repository';
import { GetExperiencesUsecase } from './usecases/get-experiences';

const dataSourceId = process.env.NOTION_EXPERIENCE_DATA_SOURCE_ID || '';
const notionToken = process.env.NOTION_TOKEN || '';

const notionAdpter = new NotionAdpter({ notionToken }).connect();
const experienceRepository = new ExperienceRepository({
  dataSourceId,
  client: notionAdpter,
});
const getExperiencesUsecase = new GetExperiencesUsecase(experienceRepository);

export async function GET() {
  try {
    const data = await getExperiencesUsecase.execute();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao requisitar experiências' }, { status: 500 });
  }
}
