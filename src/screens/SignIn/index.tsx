import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';

export function SignIn() {
  const navigation = useNavigation();

  const { signIn, isLoading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (err) {
      // Alert.alert(err);
      console.log(err);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'} e organize suas jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          {
            isLoading ?
              <ActivityIndicator color={theme.colors.primary} />
              :
              <ButtonIcon
                title="Entre com Discord"
                onPress={handleSignIn}
              />
          }
        </View>
      </View>
    </Background>
  );
}
