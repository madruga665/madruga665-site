import { Contact } from '../entities/contact';

export class ContactMapper {
  static toNotion(contact: Contact) {
    return {
      name: {
        title: [
          {
            text: {
              content: contact.name,
            },
          },
        ],
      },
      email: {
        email: contact.email,
      },
      message: {
        rich_text: [
          {
            text: {
              content: contact.message,
            },
          },
        ],
      },
    };
  }
}
