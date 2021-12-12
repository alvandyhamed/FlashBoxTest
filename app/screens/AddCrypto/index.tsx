import React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';
import * as cryptoAction from 'app/store/actions/addActions';
import * as loginActions from 'app/store/actions/loginActions';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
const Home: React.FC = () => {
  const goBack = () => NavigationService.goBack();
  const dispatch = useDispatch();
  const [cryptoId, SetNameCrypt] = React.useState('');
  const onReqAdd = () => dispatch(cryptoAction.requestAdd(cryptoId));

  return (
    <View style={styles.container}>
      <Text>Add a CryptoCurrency</Text>
      <TextInput
        label="Use a name or ticker symbol..."
        value={cryptoId}
        onChangeText={text => SetNameCrypt(text)}
        mode="outlined"
      />
      <View style={styles.ViewButton}>
        <Button
          mode="contained"
          style={styles.addButton}
          onPress={onReqAdd}
          disabled={cryptoId !== '' ? false : true}>
          ADD
        </Button>
      </View>
      <Button icon="keyboard-backspace" mode="outlined" onPress={goBack}>
        Go Back
      </Button>
    </View>
  );
};

export default Home;
