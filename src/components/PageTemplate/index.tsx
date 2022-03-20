import Header from "../Header";
import { Container } from "./styles";

interface IPageTemplateProps {
  children: React.ReactNode;
  pageTitle: string;
}

const PageTemplate = ({ children, pageTitle }: IPageTemplateProps) => {
  return (
    <Container>
      <head>
        <title>Luciano Amâncio | {pageTitle}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </head>
      <Header />
      {children}
    </Container>
  );
};

export default PageTemplate;
