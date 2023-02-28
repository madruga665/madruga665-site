import Link from "next/link";
import EnumHelper from "../../helpers/enumHelper";
import useHighlightPath from "../../hooks/usePath";
import styles from "./styles.module.scss";
import colors from "../../styles/colors.module.scss";

interface ILink {
  title: string;
  link: string;
}

function NavLinks() {
  const enumHelper = new EnumHelper();
  const { isCurrentPage } = useHighlightPath();

  function buildLinks(link: ILink, index: number) {
    return (
      <li
        className={styles.StyledListItem}
        style={isCurrentPage(link.link) ? { fontWeight: 800 } : { fontWeight: 300 }}
        key={index}
      >
        <Link href={link.link}>{link.title}</Link>
      </li>
    );
  }

  return (
    <nav className={styles.Links}>
      <ul>{enumHelper.links.map(buildLinks)}</ul>
    </nav>
  );
}

export default NavLinks;
