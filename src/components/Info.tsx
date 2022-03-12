import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Flex, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';

type InfoProps = {
  description: string;
  countries: string;
  languages: string;
  hot50: string;
};

export function Info({ description, countries, languages, hot50 }: InfoProps) {
  return (
    <>
      <Flex
        justifyContent="space-between"
        gap={['6', '7', '6', '70px']}
        py={['10', '10', '14', '20']}
        px={['5%', '12', '14', '24', '140px']}
        direction={['column', 'column', 'row']}
      >
        <Text
          fontSize={['sm', 'lg', 'xl', 'xl', '2xl']}
          lineHeight={['6', '8', '8', '8', '9']}
          textAlign="justify"
          mx={['auto', 'auto', '0']}
          w={['100%', '100%', '600px', '800px']}
        >
          {description}
        </Text>

        <HStack
          justifyContent={['center', 'center', 'end']}
          alignItems="center"
          gap={['5', '5', '5', '6', '42px']}
        >
          <VStack>
            <Text
              color="yellow.900"
              fontSize={['2xl', '4xl', '3xl', '4xl', '5xl']}
              fontWeight="semibold"
              lineHeight={['7', '8', '9', '10', '72px']}
            >
              {countries}
            </Text>
            <Text
              fontSize={['sm', 'lg', 'lg', 'xl', '2xl']}
              fontWeight="semibold"
              lineHeight={['9']}
            >
              países
            </Text>
          </VStack>

          <VStack>
            <Text
              color="yellow.900"
              fontSize={['2xl', '4xl', '3xl', '4xl', '5xl']}
              fontWeight="semibold"
              lineHeight={['7', '8', '9', '10', '72px']}
            >
              {languages}
            </Text>
            <Text
              fontSize={['sm', 'lg', 'lg', 'xl', '2xl']}
              fontWeight="semibold"
              lineHeight={['9']}
            >
              línguas
            </Text>
          </VStack>

          <VStack justifyContent="center" alignItems="center">
            <Text
              color="yellow.900"
              fontSize={['2xl', '4xl', '3xl', '4xl', '5xl']}
              fontWeight="semibold"
              lineHeight={['7', '8', '9', '10', '72px']}
            >
              {hot50}
            </Text>
            <Flex alignItems="center" gap="2.5">
              <Text
                fontSize={['sm', 'lg', 'lg', 'xl', '2xl']}
                fontWeight="semibold"
                lineHeight={['9']}
                textAlign="center"
              >
                cidades +50
              </Text>

              <Tooltip
                fontSize={['xs', 'xs', 'sm']}
                label="Número de cidades deste continente que estão entre as 50 cidades mais visitadas do mundo"
                borderRadius="5px"
              >
                <InfoOutlineIcon color="gray.200" />
              </Tooltip>
            </Flex>
          </VStack>
        </HStack>
      </Flex>
    </>
  );
}
