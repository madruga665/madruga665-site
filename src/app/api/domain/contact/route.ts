import { NextResponse } from 'next/server';
import { NotionAdpter } from '../../infrastructure/database/notion-adapter';
import { ContactRepository } from './repositories/contact-repository';
import { CreateContactUsecase } from './usecases/create-contact';

const dataSourceId = process.env.NOTION_CONTACT_DATA_SOURCE_ID || '';
const notionToken = process.env.NOTION_TOKEN || '';

const notionAdpter = new NotionAdpter({ notionToken }).connect();
const contactRepository = new ContactRepository({
  dataSourceId,
  client: notionAdpter,
});
const createContactUsecase = new CreateContactUsecase(contactRepository);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await createContactUsecase.execute({ name, email, message });

    return new NextResponse('Success', {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao enviar mensagem' }, { status: 500 });
  }
}
