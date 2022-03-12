import { GetStaticPaths, GetStaticProps } from 'next';
import { Grid, GridItem, Heading } from '@chakra-ui/react';

import { Info } from '../../components/Info';
import { City } from '../../components/City';
import { Header } from '../../components/Header';
import { createClient } from '../../services/prismicio';
import { BannerContinent } from '../../components/BannerContinent';

type ContinentProps = {
  continent: {
    slug: string;
    title: string;
    description: string;
    bannerUrl: string;
    countries: string;
    languages: string;
    hot50: string;
  };
  cities: {
    uid: string;
    city: string;
    country: string;
    srcCover: string;
    altCover: string;
    srcFlag: string;
    altFlag: string;
  }[];
};

export default function Continent({ continent, cities }: ContinentProps) {
  return (
    <>
      <Header />

      <BannerContinent
        continent={continent?.title}
        bannerUrl={continent?.bannerUrl}
      />

      <Info
        description={continent?.description}
        countries={continent?.countries}
        languages={continent?.languages}
        hot50={continent?.hot50}
      />

      <Heading
        fontSize={['xl', '3xl', '3xl', '3xl', '4xl']}
        px={['5%', '12', '14', '24', '140px']}
      >
        Cidades +50
      </Heading>

      <Grid
        justifyContent="center"
        px={['5%', '12', '14', '24', '140px']}
        templateColumns="repeat(auto-fit, 256px)"
        gap="45px"
        my="10"
      >
        {cities?.map((city) => (
          <GridItem key={city.uid}>
            <City
              city={city.city}
              country={city.country}
              srcCover={city.srcCover}
              altCover={city.altCover}
              srcFlag={city.srcFlag}
              altFlag={city.altFlag}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  const continents = await client.getAllByType('continent_page');

  const paths = continents.map((continent) => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createClient();

  const { slug } = params;

  const response = await client.getByUID('continent_page', String(slug));

  const citiesIDS = response.data.cities.map((c: { city: { id: string } }) => {
    return c.city.id;
  });

  let cities;

  if (citiesIDS[0]) {
    cities = await client.getAllByIDs(citiesIDS);
  }

  const continentProps = {
    continent: {
      slug: response.uid,
      title: response.data.title[0].text,
      description: response.data.description[0].text,
      bannerUrl: response.data.banner.url,
      countries: response.data.countries,
      languages: response.data.languages,
      hot50: response.data.hot50,
    },
    cities: cities?.map((city) => {
      return {
        uid: city.uid,
        city: city.data.city[0].text,
        country: city.data.country[0].text,
        srcCover: city.data.banner.url,
        altCover: city.data.banner.alt,
        srcFlag: city.data.flag.url,
        altFlag: city.data.flag.alt,
      };
    }),
  };

  return {
    props: {
      continent: continentProps.continent,
      cities: continentProps.cities ?? null,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
