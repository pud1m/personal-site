import type { AppProps } from 'next/app';
import '@/styles/scss/main.scss';
import Site from '@/components/Site';

export default function App({ Component, pageProps }: AppProps) {
  return <Site><Component {...pageProps} /></Site>;
}
