import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  A11y,
} from 'swiper';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

type SliderProps = {
  continents: {
    slug: string;
    title: string;
    summary: string;
    bannerUrl: string;
  }[];
};

export function Slider({ continents }: SliderProps) {
  return (
    <Box
      maxW="1240px"
      w="95%"
      h={['64', '72', '80', '96', '450px']}
      mx="auto"
      mb={['10', '10', '14', '20']}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        mousewheel
        keyboard
        autoplay={{
          delay: 3000,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay, A11y]}
        style={{
          height: '100%',
          color: 'yellow.450',
        }}
      >
        {continents?.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <VStack
              bgImg={continent.bannerUrl}
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="center"
              justifyContent="center"
            >
              <Link href={`/continent/${continent.slug}`} passHref>
                <Heading
                  as="a"
                  color="gray.50"
                  fontWeight="bold"
                  lineHeight={['8', '10', '10', '10', '72px']}
                  fontSize={['2xl', '4xl', '4xl', '4xl', '5xl']}
                >
                  {continent.title}
                </Heading>
              </Link>
              <Text
                color="gray.100"
                fontWeight="bold"
                mt={['3', '3.5', '3.5', '3.5', '4']}
                lineHeight={['3', '6', '6', '6', '9']}
                fontSize={['lg', 'xl', 'xl', 'xl', '2xl']}
              >
                {continent.summary}
              </Text>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
