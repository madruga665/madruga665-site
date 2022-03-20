import { Link } from "react-router-dom";
import { Links } from "./style";

const NavLinks = () => {
  return (
    <Links>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/projetos'>PROJETOS</Link>
        </li>
        <li>
          <Link to='/contato'>CONTATO</Link>
        </li>
      </ul>
    </Links>
  );
};

export default NavLinks;
