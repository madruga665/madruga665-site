import { Link } from "react-router-dom";
import EnumHelper from "../../helpers/enumHelper";
import { Links } from "./style";

interface ILink {
  title: string;
  link: string;
}

function NavLinks() {
  const enumHelper = new EnumHelper();

  function builLinks(link: ILink, index: number) {
    return (
      <li key={index}>
        <Link to={link.link}>{link.title}</Link>
      </li>
    );
  }

  return (
    <Links>
      <ul>
        {enumHelper.links.map(builLinks)}
      </ul>
    </Links>
  );
}

export default NavLinks;
