'use client';

import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.links} role="navigation">
      <button
        type="button"
        className={`${styles.hamburgerButton} ${isOpen ? styles.hamburgerActive : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={isOpen}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <ul className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}>
        {paths.map((item) => (
          <li
            className={
              isCurrentPage(item.path) ? styles.styledListItemActive : styles.styledListItem
            }
            key={item.title}
            onClick={closeMenu}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
