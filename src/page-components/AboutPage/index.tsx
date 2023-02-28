import NewsSoon from "../../components/NewsSoon";
import PageTemplate from "../../templates/PageTemplate";

function AboutPage() {
  const title = "Logo mais vai ter coisa aqui!";
  return (
    <PageTemplate>
      <NewsSoon title={title} />
    </PageTemplate>
  );
}

export default AboutPage;
