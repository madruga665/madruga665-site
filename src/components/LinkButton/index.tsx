import { PropsWithChildren } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface LinkButtonProps {
  url: string;
  variant?: 'yellow' | 'pink';
  disabled?: boolean;
}

function LinkButton({ url, variant = 'yellow', disabled, children }: PropsWithChildren<LinkButtonProps>) {
  const buttonClassName = `${styles.linkButton} ${variant === 'pink' ? styles.pink : ''} ${disabled ? styles.disabled : ''}`.trim();

  if (disabled) {
    return (
      <Link
        href="#"
        className={buttonClassName}
        aria-disabled="true"
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link className={buttonClassName} href={url} target="_blank" rel="noreferrer">
      {children}
    </Link>
  );
}

export default LinkButton;
