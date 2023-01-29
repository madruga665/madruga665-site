import { Link } from "react-router-dom";
import { Container } from "./style";
import Brand from "../../components/Brand";

function IntroductionPage() {
  return (
    <Container>
      <div>
        <Brand withLogo />
        <span>Desenvolvedor Web Fullstack</span>
      </div>
      <Link to='/portifolio'>ir para portifolio</Link>
    </Container>
  );
}

export default IntroductionPage;
