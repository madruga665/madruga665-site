import About from "../../components/About";
import PageTemplate from "../../templates/PageTemplate";
import NewsSoon from "../../components/NewsSoon";

const HomePage = () => {
  return (
    <PageTemplate>
      <About />
      <NewsSoon id="projetos" title='Em breve novidades' />
      <NewsSoon id="contato" title='Em breve novidades' />
    </PageTemplate>
  );
};

export default HomePage;
