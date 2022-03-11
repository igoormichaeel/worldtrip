import { Box, useColorModeValue } from '@chakra-ui/react';

export function Divider() {
  const bg = useColorModeValue('gray.700', 'gray.50');

  return (
    <Box
      bg={bg}
      h="2px"
      w={['16', '90px']}
      mx="auto"
      mb={['10', '10', '14', '20']}
    />
  );
}
