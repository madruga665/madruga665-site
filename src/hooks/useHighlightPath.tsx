import { usePathname } from "next/navigation";

function useHighlightPath() {
  const pathname = usePathname();

  function isCurrentPage(link: string) {
    return pathname === link;
  }

  return { isCurrentPage };
}

export default useHighlightPath;
