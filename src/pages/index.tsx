import Head from 'next/head';
import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { Divider } from '../components/Divider';
import { BannerHome } from '../components/BannerHome';
import { TravelCategories } from '../components/TravelCategories';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>

      <Header />

      <BannerHome />

      <TravelCategories />

      <Divider />

      <Heading
        fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
        fontWeight="medium"
        textAlign="center"
        mb={['10', '10', '14', '20']}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </>
  );
};

export default Home;
