import { NotionAdpter } from '@/app/api/infrastructure/database/notion-adapter';
import { ExperienceRepository } from '@/app/api/domain/experiences/repositories/experience-repository';
import { GetExperiencesUsecase } from '@/app/api/domain/experiences/usecases/get-experiences';
import { Experience } from '@/interfaces/experiencesPage';

export async function getExperiencePageData(): Promise<Experience[]> {
  if (typeof window === 'undefined') {
    const dataSourceId = process.env.NOTION_EXPERIENCE_DATA_SOURCE_ID || '';
    const notionToken = process.env.NOTION_TOKEN || '';

    const notionAdpter = new NotionAdpter({ notionToken }).connect();
    const experienceRepository = new ExperienceRepository({
      dataSourceId,
      client: notionAdpter,
    });
    const getExperiencesUsecase = new GetExperiencesUsecase(experienceRepository);

    return await getExperiencesUsecase.execute();
  }

  const response = await fetch('/api/domain/experiences', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  const data: Experience[] = await response.json();

  return data;
}
