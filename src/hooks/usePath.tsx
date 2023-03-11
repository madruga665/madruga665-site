import { usePathname } from "next/navigation";

function usePath() {
  const pathname = usePathname();

  function isCurrentPage(link: String) {
    return pathname === link;
  }
  return { isCurrentPage };
}

export default usePath;
