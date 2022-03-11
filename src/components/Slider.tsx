import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export function Slider() {
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
        <SwiperSlide>
          <VStack
            bgImg="assets/images/continent.png"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="center"
            justifyContent="center"
          >
            <Link href="/continent" passHref>
              <Heading
                as="a"
                color="gray.50"
                fontWeight="bold"
                lineHeight={['8', '10', '10', '10', '72px']}
                fontSize={['2xl', '4xl', '4xl', '4xl', '5xl']}
              >
                Europa
              </Heading>
            </Link>
            <Text
              color="gray.100"
              fontWeight="bold"
              mt={['3', '3.5', '3.5', '3.5', '4']}
              lineHeight={['3', '6', '6', '6', '9']}
              fontSize={['lg', 'xl', 'xl', 'xl', '2xl']}
            >
              O continente mais antigo.
            </Text>
          </VStack>
        </SwiperSlide>

        <SwiperSlide>
          <VStack
            bgImg="assets/images/continent.png"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="center"
            justifyContent="center"
          >
            <Link href="/continent" passHref>
              <Heading
                as="a"
                color="gray.50"
                fontWeight="bold"
                lineHeight={['8', '10', '10', '10', '72px']}
                fontSize={['2xl', '4xl', '4xl', '4xl', '5xl']}
              >
                Europa
              </Heading>
            </Link>
            <Text
              color="gray.100"
              fontWeight="bold"
              mt={['3', '3.5', '3.5', '3.5', '4']}
              lineHeight={['3', '6', '6', '6', '9']}
              fontSize={['lg', 'xl', 'xl', 'xl', '2xl']}
            >
              O continente mais antigo.
            </Text>
          </VStack>
        </SwiperSlide>

        <SwiperSlide>
          <VStack
            bgImg="assets/images/continent.png"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="center"
            justifyContent="center"
          >
            <Link href="/continent" passHref>
              <Heading
                as="a"
                color="gray.50"
                fontWeight="bold"
                lineHeight={['8', '10', '10', '10', '72px']}
                fontSize={['2xl', '4xl', '4xl', '4xl', '5xl']}
              >
                Europa
              </Heading>
            </Link>
            <Text
              color="gray.100"
              fontWeight="bold"
              mt={['3', '3.5', '3.5', '3.5', '4']}
              lineHeight={['3', '6', '6', '6', '9']}
              fontSize={['lg', 'xl', 'xl', 'xl', '2xl']}
            >
              O continente mais antigo.
            </Text>
          </VStack>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
