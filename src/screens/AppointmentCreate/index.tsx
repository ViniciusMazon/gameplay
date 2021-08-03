import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Guilds } from '../Guilds';
import { ModalView } from '../../components/ModalView';
import { GuildProps } from '../../components/Guild';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [toggleGuildModal, setToggleGuildModal] = useState(false);
  const [selectedGuild, setSelectedGuild] = useState<GuildProps>({} as GuildProps);

  function handleToggleGuildModal() {
    setToggleGuildModal(!toggleGuildModal);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setSelectedGuild(guildSelected);
    setToggleGuildModal(false);
  }

  function handleSelectCategory(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>

          <Header title={'Agendar partida'} />

          <Text
            style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            handleCategorySelect={handleSelectCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleToggleGuildModal}>
              <View style={styles.select}>
                {
                  selectedGuild.icon ? <GuildIcon /> : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {selectedGuild.name ? selectedGuild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name='chevron-right'
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.characterLimit}>Máximo de 100 caracteres</Text>

            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title='Agendar' />
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={toggleGuildModal} closeModal={handleToggleGuildModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>

    </KeyboardAvoidingView>
  );
}
