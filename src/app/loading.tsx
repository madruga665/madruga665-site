import PageTemplate from "@/templates/PageTemplate";
import Spinner from "@/components/Spinner";

function Loading() {
  return (
    <PageTemplate>
      <Spinner />
    </PageTemplate>
  );
}

export default Loading;