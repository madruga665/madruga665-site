import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";

import useLoadingRoute from "../hooks/useLoadingRoute";
import Loading from "../components/Loading/loading";

import "../styles/global.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "800"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useLoadingRoute();

  return (
    <main className={poppins.className}>
      <Analytics />
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </main>
  );
}
