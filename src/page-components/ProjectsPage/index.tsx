import Head from "next/head";
import NewsSoon from "../../components/NewsSoon";
import PageTemplate from "../../templates/PageTemplate";

function ProjectsPage() {
  const title = "Logo mais vai ter coisa aqui!";
  return (
    <PageTemplate>
      <Head>
        <title>Luciano Amâncio - Projetos</title>
      </Head>
      <NewsSoon title={title} />
    </PageTemplate>
  );
}

export default ProjectsPage;
