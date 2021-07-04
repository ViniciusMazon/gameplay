import React from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  );
}
