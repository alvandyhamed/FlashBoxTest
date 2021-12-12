import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 10,
  },
  item: {
    flex: 1,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: 12,
  },
  row: { flexDirection: 'row' },
  nameContainer: { paddingHorizontal: 5 },
  txtSymbol: { color: '#b3b3cc' },
  currencyContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  up: {
    color: '#18A558',
  },
  down: {
    color: '#F51720',
  },
});

export default styles;
