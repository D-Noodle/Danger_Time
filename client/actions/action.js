import axios from 'axios';
import * as types from '../constants/actionTypes';

export function addURL(username, url) {
  return function dispatchFetchToStore(dispatch) {
    axios.post('http://localhost:3333/main/addURL', `${url}`)
      .then((result) => {
        console.log('YOO!!');
        dispatch({
          type: types.FINISHED_URL_ADD,
          payload: {
            username,
            url_id: result.data.url_id,
            status: result.data.status,
            url,
          },
        });
      })
      .catch((err) => console.log('err onsubform', err));
  };
}

export const checkNow = (statusObj) => (
  console.log('we here'),
  {
    type: types.CHECK_NOW,
    payload: statusObj,
  }
);

export const finishedUrlAdd = (addedUrlObj) => ({

});
