import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
// breakpoints:
// ["sm", "md", "lg", "xl"]
//
// sm: '30em' = '480px',
// md: '48em' = '768px',
// lg: '62em' = '992px',
// xl: '80em' = '1280px,
export function Banner() {
  return (
    <>
      <Flex
        bgImg="assets/images/background.png"
        bgSize="cover"
        px="5%"
        w="full"
        h={['36', '60', '335px']}
        align="center"
        justify={['center', 'center', 'space-between']}
      >
        <VStack w={['90%', '524px']} justify="center" align="left">
          <Heading
            as="h1"
            color="gray.50"
            fontWeight="medium"
            pt={['5', '5', '0']}
            textAlign={['center', 'center', 'left']}
            lineHeight={['xl', '2xl', '2xl', '2xl', '4xl']}
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.100"
            fontWeight="normal"
            mt={['1', '5']}
            pb={['5', '5', '0']}
            lineHeight={['6', '8']}
            fontSize={['0.8rem', 'xl']}
            textAlign={['center', 'center', 'left']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
          </Text>
        </VStack>

        <Image
          src="/assets/images/airplane.png"
          alt="airplane"
          w={['320px', '320px', '360px', '420px']}
          mb={['-28', '-28', '-28', '-24']}
          display={['none', 'none', 'block']}
          transform="rotate(3deg)"
          objectFit="contain"
        />
      </Flex>
    </>
  );
}
