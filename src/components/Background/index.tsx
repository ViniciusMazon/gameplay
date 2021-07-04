import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  children: ReactNode,
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >

      {children}

    </LinearGradient >
  );
}
