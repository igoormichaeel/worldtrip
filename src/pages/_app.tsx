import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#FFBA08"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
