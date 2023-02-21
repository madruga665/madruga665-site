import { useLocation } from "react-router-dom";

function usePath() {
  const { pathname } = useLocation();

  function isCurrentPage(link: String) {
    return pathname === link;
  }
  return { isCurrentPage };
}

export default usePath;
