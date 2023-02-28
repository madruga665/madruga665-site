import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { Poppins } from "next/font/google";
import "../styles/global.scss";

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "800"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
