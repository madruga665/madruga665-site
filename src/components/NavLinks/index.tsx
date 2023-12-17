"use client";
import Link from "next/link";
import useHighlightPath from "@/hooks/useHighlightPath";
import styles from "./styles.module.scss";

interface NavLinksProps {
  paths: {
    title: string;
    path: string;
  }[];
}

function NavLinks({ paths }: NavLinksProps) {
  const { isCurrentPage } = useHighlightPath();

  return (
    <nav className={styles.Links}>
      <ul>
        {paths.map((item) => (
          <div
            className={isCurrentPage(item.path) ? styles.LinkContainerActive : styles.LinkContainer}
            key={item.title}
          >
            <li className={styles.StyledListItem}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
