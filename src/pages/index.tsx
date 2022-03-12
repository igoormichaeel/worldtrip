import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';

import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { Divider } from '../components/Divider';
import { createClient } from '../services/prismicio';
import { BannerHome } from '../components/BannerHome';
import { TravelCategories } from '../components/TravelCategories';

type HomeProps = {
  continents: {
    slug: string;
    title: string;
    summary: string;
    bannerUrl: string;
  }[];
};

export default function Home({ continents }: HomeProps) {
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

      <Slider continents={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  const response = await client.getAllByType('continent_page');

  const continents = response.map((continent) => {
    return {
      slug: continent.uid,
      title: continent.data.title[0].text,
      summary: continent.data.summary[0].text,
      bannerUrl: continent.data.banner.url,
    };
  });

  return {
    props: {
      continents,
    },
  };
};
