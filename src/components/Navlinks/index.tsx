"use client";
import Link from "next/link";

import EnumHelper from "@/helpers/enumHelper";
import useHighlightPath from "@/hooks/usePath";

import styles from "./styles.module.scss";

function NavLinks() {
  const enumHelper = new EnumHelper();
  const { isCurrentPage } = useHighlightPath();

  return (
    <nav className={styles.Links}>
      <ul>
        {enumHelper.links.map((link) => (
          <div
            className={isCurrentPage(link.link) ? styles.LinkContainerActive : styles.LinkContainer}
            key={link.title}
          >
            <li className={styles.StyledListItem}>
              <Link href={link.link}>{link.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
