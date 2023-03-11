"use client";
import Link from "next/link";

import EnumHelper from "../../helpers/enumHelper";
import useHighlightPath from "../../hooks/usePath";

import styles from "./styles.module.scss";

interface ILink {
  title: string;
  link: string;
}

function NavLinks() {
  const enumHelper = new EnumHelper();
  const { isCurrentPage } = useHighlightPath();

  function buildLinks(link: ILink, index: number) {
    return (
      <div className={isCurrentPage(link.link) ? styles.LinkContainerActive : styles.LinkContainer}>
        <li className={styles.StyledListItem} key={index}>
          <Link href={link.link}>{link.title}</Link>
        </li>
      </div>
    );
  }

  return (
    <nav className={styles.Links}>
      <ul>{enumHelper.links.map(buildLinks)}</ul>
    </nav>
  );
}

export default NavLinks;
