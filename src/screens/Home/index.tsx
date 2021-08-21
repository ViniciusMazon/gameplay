import React, { useCallback, useState } from 'react';
import { View, FlatList, AsyncStorage } from 'react-native';
import { AddButton } from '../../components/AddButton';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { Loading } from '../../components/Loading';

export function Home() {
  const navigation = useNavigation();
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  )

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

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setIsLoading(false);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <AddButton onPress={handleNavigateToAppointmentCreate} />
      </View>

      <CategorySelect categorySelected={category} handleCategorySelect={handleCategorySelect} />

      {
        isLoading ?
          <Loading />
          :
          <>
            <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />

            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 69 }}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={handleNavigateToAppointmentDetails}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
            />
          </>
      }
    </Background>
  );
}
