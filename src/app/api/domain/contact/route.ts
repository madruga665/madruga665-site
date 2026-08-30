import { NextResponse } from 'next/server';
import { NotionAdpter } from '../../infrastructure/database/notion-adapter';
import { ContactRepository } from './repositories/contact-repository';
import { CreateContactUsecase } from './usecases/create-contact';
import { logger } from '@/lib/logger';
import { httpRequestsTotal, httpRequestDurationHistogram } from '@/lib/metrics';

const dataSourceId = process.env.NOTION_CONTACT_DATA_SOURCE_ID || '';
const notionToken = process.env.NOTION_TOKEN || '';

const notionAdpter = new NotionAdpter({ notionToken }).connect();
const contactRepository = new ContactRepository({
  dataSourceId,
  client: notionAdpter,
});
const createContactUsecase = new CreateContactUsecase(contactRepository);

export async function POST(req: Request) {
  const start = performance.now();
  const requestId = crypto.randomUUID();
  const path = '/api/domain/contact';
  const method = 'POST';

  try {
    const body = await req.json();
    const { name, email, message } = body;

    await createContactUsecase.execute({ name, email, message });

    const durationMs = performance.now() - start;
    const status = 201;

    logger.info('Contact message submitted successfully', {
      event: 'http.request',
      requestId,
      path,
      method,
      status,
      durationMs,
    });

    httpRequestsTotal.inc({ method, route: path, status: String(status) });
    httpRequestDurationHistogram.observe({ method, route: path, status: String(status) }, durationMs / 1000);

    return new NextResponse('Success', { status });
  } catch (error) {
    const durationMs = performance.now() - start;
    const status = 500;

    logger.error('Failed to create contact message', {
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

    return NextResponse.json({ error: 'Erro ao enviar mensagem' }, { status });
  }
}
