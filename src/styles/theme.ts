import {
  extendTheme,
  Theme,
  useColorModeValue,
  type ThemeConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    yellow: {
      900: '#FFBA08',
      450: 'rgba(255, 186, 8,0.5)',
    },
    gray: {
      700: '#47585B',
      400: '#999999',
      200: 'rgba(153, 153, 153, 0.5)',
      100: '#DADADA',
      50: '#F5F8FA',
    },
    blue: {
      800: '#002039',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.700', 'gray.50')(props),
        bg: mode('gray.50', 'blue.800')(props),
      },
    }),
  },
} as Theme | {});
