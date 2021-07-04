import React, { useState } from 'react';
import { View } from 'react-native';
import { AddButton } from '../../components/AddButton';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {

  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    if (categoryId === category) {
      setCategory('');
      return;
    }

    setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <AddButton />
      </View>

      <View>
        <CategorySelect categorySelected={category} handleCategorySelect={handleCategorySelect} />
      </View>
    </View>
  );
}
