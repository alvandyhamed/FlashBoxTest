import { put } from 'redux-saga/effects';

import { Alert } from 'react-native';
import * as loginActions from 'app/store/actions/loginActions';

export default function* loginAsync() {
  yield put(loginActions.enableLoader());

  const response = { success: true, data: { id: 1 }, message: 'Success' };

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader());
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert('cryptoApp', response.message);
    }, 200);
  }
}
