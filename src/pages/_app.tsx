import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from '@react-aria/ssr';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
