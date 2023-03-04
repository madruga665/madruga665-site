import { useForm } from "react-hook-form";

import Button from "../../components/Button";
import PageTemplate from "../../templates/PageTemplate";

import styles from "./styles.module.scss";

interface formData {
  name: string;
  email: string;
  message: string;
}

function ContactPage() {
  const { register, handleSubmit, formState } = useForm<formData>();
  const { errors } = formState;
  function onSubmit(data: formData): void {
    console.log(data);
  }

  return (
    <PageTemplate>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.FormControl}>
          <label htmlFor='name'>Seu Nome</label>
          <input id='name' type='text' {...register("name", { required: true })} />
          {errors.name && <span className={styles.ErrorText}>Nome obrigatório</span>}
        </div>

        <div className={styles.FormControl}>
          <label htmlFor='email'>Seu Email</label>
          <input id='email' type='email' {...register("email", { required: true })} />
          {errors.email && <span className={styles.ErrorText}>Email obrigatório</span>}
        </div>

        <div className={styles.FormControl}>
          <label htmlFor='message'>Sua Mensagem</label>
          <textarea id='message' {...register("message", { required: true })} />
          {errors.message && <span className={styles.ErrorText}>Mensagem obrigatória</span>}
        </div>
        <div className={styles.ButtonContainer}>
          <Button type='submit' label='Enviar' />
        </div>
      </form>
    </PageTemplate>
  );
}

export default ContactPage;
