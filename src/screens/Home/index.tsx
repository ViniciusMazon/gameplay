import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { AddButton } from '../../components/AddButton';
import { useNavigation } from '@react-navigation/native';
import { Appointment } from '../../components/Appointment';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

export function Home() {
  const navigation = useNavigation();
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

  function handleNavigateToAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleNavigateToAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <AddButton onPress={handleNavigateToAppointmentCreate} />
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
            <Appointment
              data={item}
              onPress={handleNavigateToAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
}
