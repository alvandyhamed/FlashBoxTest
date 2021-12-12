/*
 * Reducer actions related with Add Crypto
 */
import * as types from './types';

export function requestAdd(CryptoId: string) {
  return {
    type: types.ADD_REQUEST,
    CryptoId,
  };
}
