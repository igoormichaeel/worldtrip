import { Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';

export function BannerContinent() {
  return (
    <>
      <Head>
        <title>Worldtrip | Europa</title>
      </Head>
      <Flex
        w="full"
        h={['150px', '3xs', 'sm', 'md', '500px']}
        bgSize="cover"
        bgPosition="center bottom"
        bgImg="assets/images/europe.png"
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
          Europa
        </Heading>
      </Flex>
    </>
  );
}
