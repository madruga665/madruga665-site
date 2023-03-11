import PortifolioLayout from "@/layouts/PortifolioLayout";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PortifolioLayout>
      {children}
    </PortifolioLayout>
  );
}

export default Layout;
