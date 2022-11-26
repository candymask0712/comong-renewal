import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
