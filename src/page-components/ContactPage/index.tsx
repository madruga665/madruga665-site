import axios from "axios";
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
  const { register, handleSubmit, formState, reset } = useForm<formData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { errors, isSubmitting } = formState;

  async function onSubmit(data: formData) {
    reset();
    alert("mensagem enviada com sucesso");
    await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`, data);
  }

  return (
    <PageTemplate>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.Text}>
        Caso queira entrar em contado ou deixar algum feedback fique à vontade para me mandar
        uma mensagem.
      </p>
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
          <Button type='submit' label='Enviar' loading={isSubmitting} />
        </div>
      </form>
    </PageTemplate>
  );
}

export default ContactPage;
