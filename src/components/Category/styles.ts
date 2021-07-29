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
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    color: theme.colors.heading,
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    height: 12,
    width: 12,
    backgroundColor: theme.colors.secondary100,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: theme.colors.secondary100,
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    height: 12,
    width: 10,
    backgroundColor: theme.colors.primary,
  },
});
