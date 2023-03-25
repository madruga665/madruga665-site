"use client";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import WindowCard from "@/components/WindowCard";
import { formData } from "@/interfaces/contactPage";
import { onSubmit } from "./contact.service";

import "react-toastify/dist/ReactToastify.minimal.css";
import styles from "./styles.module.scss";

function ContactPage() {
  const { register, handleSubmit, formState, reset } = useForm<formData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { errors, isSubmitting } = formState;
  const router = useRouter();

  return (
    <div className={styles.Container}>
      <Head>
        <title>Luciano Amâncio - Contato</title>
      </Head>
      <WindowCard>
        <form
          className={styles.Form}
          onSubmit={handleSubmit((data) =>
            onSubmit(data, () => {
              reset();
              router.refresh();
            })
          )}
        >
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
      </WindowCard>
    </div>
  );
}

export default ContactPage;
