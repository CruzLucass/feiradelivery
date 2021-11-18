import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 240,
    backgroundColor: theme.color.highlight,
    alignItems: 'center',
  },
  divLabel: {
    height: 20,
    marginLeft: -175,
    marginTop: 15
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});