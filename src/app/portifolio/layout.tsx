import PageTemplate from "@/templates/PageTemplate";
import React from "react";

function PortifolioLayout({ children }: { children: React.ReactNode }) {
  return <PageTemplate>{children}</PageTemplate>;
}

export default PortifolioLayout;
