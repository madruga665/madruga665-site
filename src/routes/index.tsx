import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewsSoon from "../components/NewsSoon";
import PageTemplate from "../templates/PageTemplate";
import IntroductionPage from "../pages/IntroductionPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<IntroductionPage />} />
      <Route path='/portifolio' element={<HomePage />} />
      <Route path="/portifolio/projetos" element={<PageTemplate><NewsSoon id="projetos" title='Em breve novidades' /></PageTemplate>} />
      <Route path="/portifolio/contato" element={<PageTemplate><NewsSoon id="projetos" title='Em breve novidades' /></PageTemplate>} />
      <Route path="/portifolio/sobre" element={<PageTemplate><NewsSoon id="projetos" title='Em breve novidades' /></PageTemplate>} />
    </Routes>
  );
};

export default MyRoutes;
