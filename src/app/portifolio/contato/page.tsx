import WindowCard from '@/components/WindowCard';
import { ContactForm } from '@/components/ContactForm';
import styles from './styles.module.scss';

export const metadata = { title: 'Luciano Amâncio - Contato' };

function ContactPage() {
  return (
    <div className={styles.container}>
      <WindowCard>
        <ContactForm />
      </WindowCard>
    </div>
  );
}

export default ContactPage;
