import PageTemplate from "@/templates/PageTemplate";
import Spinner from "@/components/Spinner";

function Loading() {
  return (
    <PageTemplate>
      <div>
        <Spinner />
      </div>
    </PageTemplate>
  );
}

export default Loading;