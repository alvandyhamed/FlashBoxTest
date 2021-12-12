/*
 * Reducer actions related with login
 */
import * as types from './types';
import { IAddResponse } from 'app/models/api/add';

export function requestAdd(id: string) {
  return {
    type: types.ADD_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function loginFailed() {
  return {
    type: types.ADD_FAILED,
  };
}

export function onAddResponse(response: IAddResponse) {
  return {
    type: types.ADD_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ADD_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.ADD_DISABLE_LOADER,
  };
}
