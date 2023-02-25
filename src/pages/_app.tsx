import type { AppProps } from "next/app";
import { Inter, Poppins } from "next/font/google";
import "../styles/Global.scss";

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "800"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
