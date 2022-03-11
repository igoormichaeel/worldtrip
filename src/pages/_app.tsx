import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../styles/slider.scss';

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
