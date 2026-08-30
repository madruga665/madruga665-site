import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  variant?: 'yellow' | 'pink';
  disabled?: boolean;
  'data-track-click'?: string;
  'data-track-category'?: string;
  'data-track-label'?: string;
}

function LinkButton({
  url,
  variant = 'yellow',
  disabled,
  children,
  ...rest
}: PropsWithChildren<LinkButtonProps>) {
  const buttonClassName = `${styles.linkButton} ${variant === 'pink' ? styles.pink : ''} ${disabled ? styles.disabled : ''}`.trim();

  if (disabled) {
    return (
      <Link
        href="#"
        className={buttonClassName}
        aria-disabled="true"
        onClick={(e) => e.preventDefault()}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      className={buttonClassName}
      href={url}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
