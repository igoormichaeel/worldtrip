import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

type CityProps = {
  srcCover: string;
  altCover: string;
  srcFlag: string;
  altFlag: string;
};

export function City({ srcCover, altCover, srcFlag, altFlag }: CityProps) {
  return (
    <Flex w="256px" h="279px" borderRadius="base" direction="column">
      <Image src={srcCover} alt={altCover} w="100%" h="173px" />

      <HStack
        bg="white"
        w="100%"
        h="100%"
        px={['6']}
        borderBottomRadius="base"
        borderColor="yellow.450"
        borderWidth="1px"
        borderTop="0"
        justifyContent="space-between"
      >
        <VStack alignItems="start">
          <Heading
            color="gray.700"
            fontSize={['xl']}
            fontWeight="semibold"
            lineHeight="25px"
          >
            Londres
          </Heading>
          <Text
            color="gray.400"
            fontSize={['md']}
            fontWeight="medium"
            lineHeight="26px"
          >
            Reino Unido
          </Text>
        </VStack>
        <Image src={srcFlag} alt={altFlag} w="30px" h="30px" />
      </HStack>
    </Flex>
  );
}
