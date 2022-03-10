import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

type CategoryProps = {
  src: string;
  alt: string;
  subtitle: string;
};

export function Category({ src, alt, subtitle }: CategoryProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex direction={['row', 'column']} justifyContent="center" align="center">
      {isMobile ? (
        <Image src={src} alt={alt} boxSize={['12', '14', '16', '20', '85px']} />
      ) : (
        <Text color="yellow.900" fontSize="2xl" mr="2">
          •
        </Text>
      )}

      <Text
        color="gray-700"
        fontWeight="semibold"
        lineHeight="9"
        textAlign="center"
        fontSize={['sm', 'md', 'lg', 'xl', 'xl']}
      >
        {subtitle}
      </Text>
    </Flex>
  );
}
