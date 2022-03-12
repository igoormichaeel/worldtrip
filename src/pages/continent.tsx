import { Grid, GridItem, Heading } from '@chakra-ui/react';

import { Info } from '../components/Info';
import { Header } from '../components/Header';
import { BannerContinent } from '../components/BannerContinent';
import { City } from '../components/City';

export default function Continent() {
  return (
    <>
      <Header />

      <BannerContinent />

      <Info />

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
        <GridItem>
          <City
            srcCover="/assets/images/london.png"
            altCover="London"
            srcFlag="/assets/images/uk.png"
            altFlag="London flag"
          />
        </GridItem>
        <GridItem>
          <City
            srcCover="/assets/images/london.png"
            altCover="London"
            srcFlag="/assets/images/uk.png"
            altFlag="London flag"
          />
        </GridItem>
        <GridItem>
          <City
            srcCover="/assets/images/london.png"
            altCover="London"
            srcFlag="/assets/images/uk.png"
            altFlag="London flag"
          />
        </GridItem>
        <GridItem>
          <City
            srcCover="/assets/images/london.png"
            altCover="London"
            srcFlag="/assets/images/uk.png"
            altFlag="London flag"
          />
        </GridItem>
        <GridItem>
          <City
            srcCover="/assets/images/london.png"
            altCover="London"
            srcFlag="/assets/images/uk.png"
            altFlag="London flag"
          />
        </GridItem>
        <GridItem>
          <City
            srcCover="/assets/images/london.png"
            altCover="London"
            srcFlag="/assets/images/uk.png"
            altFlag="London flag"
          />
        </GridItem>
        <GridItem>
          <City
            srcCover="/assets/images/london.png"
            altCover="London"
            srcFlag="/assets/images/uk.png"
            altFlag="London flag"
          />
        </GridItem>
        <GridItem>
          <City
            srcCover="/assets/images/london.png"
            altCover="London"
            srcFlag="/assets/images/uk.png"
            altFlag="London flag"
          />
        </GridItem>
      </Grid>
    </>
  );
}
