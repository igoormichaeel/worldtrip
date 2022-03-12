import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react';
import useSound from 'use-sound';

import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export function ColorModeSwitcher({ ...rest }: ColorModeSwitcherProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  const [play] = useSound('/assets/sounds/light-switch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  function handleClick() {
    colorMode === 'dark' ? play({ id: 'on' }) : play({ id: 'off' });
    toggleColorMode();
  }

  return (
    <IconButton
      aria-label="Select theme mode"
      variant="ghost"
      fontSize={['14', '16']}
      icon={colorMode === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
      onClick={handleClick}
      {...rest}
    />
  );
}
