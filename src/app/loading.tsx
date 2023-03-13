import PortifolioLayout from "@/layouts/PortifolioLayout";
import Spinner from "@/components/Spinner";

function Loading() {
  return (
    <PortifolioLayout>
      <Spinner />
    </PortifolioLayout>
  );
}

export default Loading;
