import { NextResponse } from 'next/server';
import { NotionAdpter } from '../../infrastructure/database/notion-adapter';
import { ExperienceRepository } from './repositories/experience-repository';
import { GetExperiencesUsecase } from './usecases/get-experiences';
import { logger } from '@/lib/logger';
import { httpRequestsTotal, httpRequestDurationHistogram } from '@/lib/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const dataSourceId = process.env.NOTION_EXPERIENCE_DATA_SOURCE_ID || '';
const notionToken = process.env.NOTION_TOKEN || '';

const notionAdpter = new NotionAdpter({ notionToken }).connect();
const experienceRepository = new ExperienceRepository({
  dataSourceId,
  client: notionAdpter,
});
const getExperiencesUsecase = new GetExperiencesUsecase(experienceRepository);

export async function GET() {
  const start = performance.now();
  const requestId = crypto.randomUUID();
  const path = '/api/domain/experiences';
  const method = 'GET';

  try {
    const data = await getExperiencesUsecase.execute();
    const durationMs = performance.now() - start;
    const status = 200;

    logger.info('Fetched experiences successfully', {
      event: 'http.request',
      requestId,
      path,
      method,
      status,
      durationMs,
      context: { count: Array.isArray(data) ? data.length : undefined },
    });

    httpRequestsTotal.inc({ method, route: path, status: String(status) });
    httpRequestDurationHistogram.observe({ method, route: path, status: String(status) }, durationMs / 1000);

    return NextResponse.json(data);
  } catch (error) {
    const durationMs = performance.now() - start;
    const status = 500;

    logger.error('Failed to fetch experiences', {
      event: 'http.request_error',
      requestId,
      path,
      method,
      status,
      durationMs,
      error,
    });

    httpRequestsTotal.inc({ method, route: path, status: String(status) });
    httpRequestDurationHistogram.observe({ method, route: path, status: String(status) }, durationMs / 1000);

    return NextResponse.json({ error: 'Erro ao requisitar experiências' }, { status });
  }
}
