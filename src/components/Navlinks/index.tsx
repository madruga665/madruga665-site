import Link from "next/link";
import EnumHelper from "../../helpers/enumHelper";
import { Links, StyledListItem } from "./style";
import useHighlightPath from "../../hooks/usePath";

interface ILink {
  title: string;
  link: string;
}

function NavLinks() {
  const enumHelper = new EnumHelper();
  const { isCurrentPage } = useHighlightPath();

  function buildLinks(link: ILink, index: number) {
    return (
      <StyledListItem highlight={isCurrentPage(link.link)} key={index}>
        <Link href={link.link}>{link.title}</Link>
      </StyledListItem>
    );
  }

  return (
    <Links>
      <ul>{enumHelper.links.map(buildLinks)}</ul>
    </Links>
  );
}

export default NavLinks;
