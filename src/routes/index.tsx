import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projetos' element={<ProjectsPage />} />
      <Route path='/contato' element={<ContactPage />} />
    </Routes>
  );
};

export default MyRoutes;
