import Brand from "../Brand";
import NavLinks from "../Navlinks";
import { HeaderStyled } from "./style";

const Header = () => {
  return (
    <HeaderStyled>
      <Brand />
      <NavLinks />
    </HeaderStyled>
  );
};

export default Header;
