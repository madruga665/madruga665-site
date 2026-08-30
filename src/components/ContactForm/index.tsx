'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { formData } from '@/interfaces/contactPage';
import { onSubmit } from '@/app/portifolio/contato/contact.service';
import { trackFormSubmission } from '@/components/Telemetry';
import styles from './styles.module.scss';

export function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm<formData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const { errors, isSubmitting } = formState;
  const router = useRouter();

  const handleFormSubmit = async (data: formData) => {
    const start = performance.now();
    try {
      await onSubmit(data, () => {
        reset();
        router.refresh();
      });
      trackFormSubmission({
        formId: 'contact_form',
        status: 'success',
        durationMs: performance.now() - start,
        route: '/portifolio/contato',
      });
    } catch {
      trackFormSubmission({
        formId: 'contact_form',
        status: 'failure',
        durationMs: performance.now() - start,
        route: '/portifolio/contato',
      });
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <p className={styles.text}>
        Caso queira entrar em contado ou deixar algum feedback fique à vontade para me mandar
        uma mensagem.
      </p>
      <div className={styles.formControl}>
        <label htmlFor="name">Seu Nome</label>
        <input id="name" type="text" {...register('name', { required: true })} />
        {errors.name && <span className={styles.errorText}>Nome obrigatório</span>}
      </div>

      <div className={styles.formControl}>
        <label htmlFor="email">Seu Email</label>
        <input id="email" type="email" {...register('email', { required: true })} />
        {errors.email && <span className={styles.errorText}>Email obrigatório</span>}
      </div>

      <div className={styles.formControl}>
        <label htmlFor="message">Sua Mensagem</label>
        <textarea id="message" {...register('message', { required: true })} />
        {errors.message && <span className={styles.errorText}>Mensagem obrigatória</span>}
      </div>
      <div className={styles.buttonContainer}>
        <Button type="submit" label="Enviar" loading={isSubmitting} />
      </div>
    </form>
  );
}
