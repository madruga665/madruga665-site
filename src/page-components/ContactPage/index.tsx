import Button from "../../components/Button";
import PageTemplate from "../../templates/PageTemplate";
import styles from "./styles.module.scss";

function ContactPage() {
  return (
    <PageTemplate>
      <section className={styles.Container}>
        <form className={styles.Form}>
          <div className={styles.FormControl}>
            <label htmlFor='name'>Seu Nome</label>
            <input id='name' type='text' />
          </div>

          <div className={styles.FormControl}>
            <label htmlFor='email'>Seu Email</label>
            <input id='email' type='email' />
          </div>

          <div className={styles.FormControl}>
            <label htmlFor='message'>Sua Mensagem</label>
            <textarea id='message' />
          </div>
          <div className={styles.ButtonContainer}>
            <Button label='Enviar' />
          </div>
        </form>
      </section>
    </PageTemplate>
  );
}

export default ContactPage;
