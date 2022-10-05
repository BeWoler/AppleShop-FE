import type { AppProps } from 'next/app';
import Layout from '@/hoc/layout/Layout';
import '@/assets/styles/globals.sass';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
