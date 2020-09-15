import * as types from '../constants/actionTypes';

export const addURL = (urlObj) => ({
  type: types.ADD_URL,
  payload: urlObj,
});

export const checkNow = (statusObj) => (
  console.log("we here"),
  {
    type: types.CHECK_NOW,
    payload: statusObj,
  }
);