import Link from "next/link";
import styles from "./styles.module.scss";

function LinkButton({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <Link className={styles.linkButton} href={url} target='_blank' rel='noreferrer' >
      {children}
    </Link>
  );
}

export default LinkButton;
