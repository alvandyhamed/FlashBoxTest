import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  addButton: {
    marginVertical: 10,
    backgroundColor: AppStyles.color.COLOR_BUTTON,
    width: '50%',
  },
  ViewButton: {
    alignItems: 'flex-end',
  },
});

export default styles;
