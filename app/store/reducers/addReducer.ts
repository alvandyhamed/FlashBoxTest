/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IAddState } from 'app/models/reducers/add';
import { IAddRequestState, IAddResponseState } from 'app/models/actions/add';
const initialState: IAddState = {
  isLoggedIn: false,
  id: 0,
  username: '',
  password: '',
};

export const addReducer = createReducer(initialState, {
  [types.ADD_REQUEST](state: IAddState, action: IAddRequestState) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.ADD_LOADING_ENDED](state: IAddState) {
    return { ...state };
  },
  [types.ADD_RESPONSE](state: IAddState, action: IAddResponseState) {
    return {
      ...state,
      id: action.response.id,
      isLoggedIn: true,
    };
  },
  [types.ADD_FAILED](state: IAddState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
