import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  title: {
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    color: theme.colors.heading,
  },
  check: {
    height: 12,
    width: 12,
    backgroundColor: theme.colors.secondary100,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderWidth:2,
    borderRadius: 3,
    borderColor: theme.colors.secondary100,
  },
  checked: {
    height: 10,
    width: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
    marginRight: 7,
  },
});
