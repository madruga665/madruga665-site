import { NextResponse } from 'next/server';
import { NotionAdpter } from '../../infrastructure/database/notion-adapter';
import { HomeRepository } from './repositories/home-repository';
import { GetHomePageDataUsecase } from './usecases/get-home-page-data';
import { logger } from '@/lib/logger';
import { httpRequestsTotal, httpRequestDurationHistogram } from '@/lib/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const homePageId = process.env.NOTION_HOME_PAGE_ID || '';
const notionToken = process.env.NOTION_TOKEN || '';

const notionAdpter = new NotionAdpter({ notionToken }).connect();
const homeRepository = new HomeRepository({
  homePageId: homePageId,
  client: notionAdpter,
});
const getHomePageDataUsecase = new GetHomePageDataUsecase(homeRepository);

export async function GET() {
  const start = performance.now();
  const requestId = crypto.randomUUID();
  const path = '/api/domain/home';
  const method = 'GET';

  try {
    const data = await getHomePageDataUsecase.execute();
    const durationMs = performance.now() - start;
    const status = 200;

    logger.info('Fetched home page data successfully', {
      event: 'http.request',
      requestId,
      path,
      method,
      status,
      durationMs,
    });

    httpRequestsTotal.inc({ method, route: path, status: String(status) });
    httpRequestDurationHistogram.observe({ method, route: path, status: String(status) }, durationMs / 1000);

    return NextResponse.json(data);
  } catch (error) {
    const durationMs = performance.now() - start;
    const status = 500;

    logger.error('Failed to fetch home page data', {
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

    return NextResponse.json({ error: 'Erro ao requisitar dados da home page' }, { status });
  }
}
