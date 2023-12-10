import { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface LinkButtonProps {
  url: string;
}

function LinkButton({ url, children }: PropsWithChildren<LinkButtonProps>) {
  return (
    <Link className={styles.linkButton} href={url} target='_blank' rel='noreferrer'>
      {children}
    </Link>
  );
}

export default LinkButton;
