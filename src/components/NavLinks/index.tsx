'use client';
import Link from 'next/link';
import useHighlightPath from '@/hooks/useHighlightPath';
import styles from './styles.module.scss';

interface NavLinksProps {
  paths: {
    title: string;
    path: string;
  }[];
}

export function NavLinks({ paths }: NavLinksProps) {
  const { isCurrentPage } = useHighlightPath();

  return (
    <nav className={styles.Links}>
      <ul>
        {paths.map((item) => (
          <li
            className={
              isCurrentPage(item.path) ? styles.StyledListItemActive : styles.StyledListItem
            }
            key={item.title}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
