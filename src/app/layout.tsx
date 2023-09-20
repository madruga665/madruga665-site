import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "../styles/global.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "800"],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
      <Analytics />
    </html>
  );
}

export const dynamic = 'force-dynamic';
export default RootLayout;
