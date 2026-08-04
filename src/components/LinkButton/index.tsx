import { PropsWithChildren } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface LinkButtonProps {
  url: string;
  variant?: 'yellow' | 'pink';
}

function LinkButton({ url, variant = 'yellow', children }: PropsWithChildren<LinkButtonProps>) {
  const buttonClassName = `${styles.linkButton} ${variant === 'pink' ? styles.pink : ''}`.trim();

  return (
    <Link className={buttonClassName} href={url} target="_blank" rel="noreferrer">
      {children}
    </Link>
  );
}

export default LinkButton;
