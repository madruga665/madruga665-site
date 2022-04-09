import Header from "../../components/Header";
import { Container } from "./styles";

interface IPageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: IPageTemplateProps) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default PageTemplate;
