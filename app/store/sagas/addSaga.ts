import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginActions';

import getAsset from 'app/services/GetAsset';

// Our worker Saga that logins the user
export default function* loginAsync({ payload }) {
  yield put(loginActions.enableLoader());

  try {
    const response = yield call(getAsset, payload.id, {});
    var MyCoinList: [string] = [];
    MyCoinList = JSON.parse(yield call(AsyncStorage.getItem, '@app_coin_list'))
      ? JSON.parse(yield call(AsyncStorage.getItem, '@app_coin_list'))
      : [];

    if (MyCoinList.indexOf(response?.data?.data?.symbol) === -1) {
      MyCoinList.push(response?.data?.data?.symbol);

      yield call(
        AsyncStorage.setItem,
        '@app_coin_list',
        JSON.stringify(MyCoinList),
      );
      Alert.alert('TrackeApp', 'Your Coin Add successfully!!');
    } else {
      Alert.alert('TrackeApp', 'This token existing in your List!!!');
    }

    yield put(loginActions.disableLoader());
  } catch (err) {
    yield put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert('TrackeApp', 'You Coin not exist!');
    }, 200);
  }
}
