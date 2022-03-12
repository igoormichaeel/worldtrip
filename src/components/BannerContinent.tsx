import { Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';

type BannerContinentProps = {
  continent: string;
  bannerUrl: string;
};

export function BannerContinent({
  continent,
  bannerUrl,
}: BannerContinentProps) {
  return (
    <>
      <Head>
        <title>Worldtrip | {continent}</title>
      </Head>
      <Flex
        w="full"
        h={['150px', '3xs', 'sm', 'md', '500px']}
        bgSize="cover"
        bgPosition="center bottom"
        bgImg={bannerUrl}
        justifyContent={['center', 'start', 'start']}
        alignItems={['center', 'end', 'end']}
        px={['0', '12', '24', '32', '140px']}
        pb={['0', '10', '12', '14', '60px']}
      >
        <Heading
          color="gray.50"
          fontWeight="semibold"
          fontSize={['2xl', '4xl', '4xl', '4xl', '5xl']}
        >
          {continent}
        </Heading>
      </Flex>
    </>
  );
}
