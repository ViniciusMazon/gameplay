import React from 'react';
import { ScrollView } from 'react-native';

import { Category } from '../Category';
import { styles } from './styles';
import { categories } from '../../utils/categories';

type Props = {
  categorySelected: string;
  hasCheckBox?: boolean;
  handleCategorySelect: (categoryId: string) => void;
}

export function CategorySelect({
  categorySelected,
  hasCheckBox = false,
  handleCategorySelect
}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          hasCheckBox={hasCheckBox}
          checked={category.id === categorySelected}
          onPress={() => handleCategorySelect(category.id)}
        />
      ))}
    </ScrollView>
  );
}
