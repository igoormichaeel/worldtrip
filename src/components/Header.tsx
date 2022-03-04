import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export function Header() {
  const [isHome, setIsHome] = useState('');

  useEffect(() => {
    setIsHome(Router.asPath);
  }, []);

  function handleClick() {
    Router.push('/');
  }

  return (
    <Flex
      as="header"
      w="100%"
      h={['50px', '75px', '100px']}
      justify="space-between"
      align="center"
      px={['4', '12', '24']}
    >
      {isHome === '/' ? (
        <Box w={['10', '16']} />
      ) : (
        <IconButton
          aria-label="Press to go back to previous page"
          variant="ghost"
          fontSize={['10', '16']}
          icon={<MdOutlineArrowBackIos />}
          onClick={handleClick}
        />
      )}

      <Image
        src="/assets/images/logo.png"
        alt="logo"
        objectFit="cover"
        w={['28', '36', '184px']}
      />

      <ColorModeSwitcher my="auto" justifySelf="left" />
    </Flex>
  );
}
