import { Contact } from '../entities/contact';
import { ContactRepository } from '../repositories/contact-repository';

export class CreateContactUsecase {
  private contactRepository: ContactRepository;

  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(contact: Contact): Promise<void> {
    await this.contactRepository.create(contact);
  }
}
