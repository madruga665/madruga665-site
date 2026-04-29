import { Brand } from '../Brand';
import { NavLinks } from '../NavLinks';
import styles from './styles.module.scss';

interface HeaderProps {
  paths: {
    title: string;
    path: string;
  }[];
}

export function Header({ paths }: HeaderProps) {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContent}>
        <Brand />
        <NavLinks paths={paths} />
      </div>
    </header>
  );
}
