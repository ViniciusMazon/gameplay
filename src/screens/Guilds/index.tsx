import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGuilds();
  }, []);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');
    setGuilds(response.data);
    setIsLoading(false);
  }

  return (
    <View style={styles.container}>
      {
        isLoading ?
          <Loading /> :
          <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Guild data={item} onPress={() => handleGuildSelect(item)} />
            )}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <ListDivider isCentered />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{ paddingBottom: 69, paddingTop: 104 }}
            style={styles.guilds}
          />
      }
    </View>
  );
}
