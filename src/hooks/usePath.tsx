import { useRouter } from "next/router";

function usePath() {
  const { pathname } = useRouter();

  function isCurrentPage(link: String) {
    return pathname === link;
  }
  return { isCurrentPage };
}

export default usePath;
