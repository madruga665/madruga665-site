import About from "../../components/About";
import PageTemplate from "../../templates/PageTemplate";

const HomePage = () => {
  return (
    <PageTemplate pageTitle="Home">
      <About />
    </PageTemplate>
  );
};

export default HomePage;
