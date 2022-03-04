import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Header />

      <Banner />

      <Link href="/continent">Go to Europe</Link>
    </>
  );
};

export default Home;
