import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '@/components/common/banner/Banner';
import Benefits from '@/components/common/benefits/Benefits';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apple Shop</title>
        <meta name="description" content="Apple Shop" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main>
        <Banner />
        <Benefits />
      </main>
    </>
  );
};

export default Home;
