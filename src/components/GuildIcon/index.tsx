import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://www.clipartmax.com/png/middle/307-3072086_discord-icon-discord-icon-png.png';
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />

  );
}
