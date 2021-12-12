import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Avatar } from 'react-native-paper';

import { IThemeState } from 'app/models/reducers/theme';

interface IState {
  themeReducer: IThemeState;
}

const AvatarBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={28} source={require('../assets/avatar.jpeg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 12,
  },
  icon: { marginLeft: 4 },
});

export default AvatarBar;
