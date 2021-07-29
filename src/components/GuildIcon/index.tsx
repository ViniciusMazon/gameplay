import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://play-lh.googleusercontent.com/Wq15hCMPJW-eUz-c4DtnUxHkk2s-pVra14td-E4b05Eo-Cu8Koj6BqPUNULbh9HfjpkC';
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />

  );
}
