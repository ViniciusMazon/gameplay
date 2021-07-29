import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { AddButton } from '../../components/AddButton';
import { Appointment } from '../../components/Appointment';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider'
export function Home() {

  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '05/07 às 17:30h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '05/07 às 17:30h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

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
      <CategorySelect categorySelected={category} handleCategorySelect={handleCategorySelect} />
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  );
}
