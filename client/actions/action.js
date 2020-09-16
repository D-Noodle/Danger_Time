import * as types from '../constants/actionTypes';
import axios from 'axios';

//this is using thunk when it gets to store. Thunk receives the first dispatch, which is a function with the argument 'dispatch' passed in. It recognizes this and performs the async action within, which, in this case, is a fetch request to the url passed in.
export const addURL = (username, url) => (dispatch) => {
  axios.post('http://localhost:3333/main/addURL', {url})
    .then((result)=>{
      dispatch({
        type: types.FINISHED_URL_ADD,
        payload: {
          username,
          url_id: result.data.url_id,
          status: result.data.status,
          url,
        }
      });
    })
    .catch(err=>
      console.log('err onsubform', err)
    )
};

export const checkNow = (statusObj) => (
  console.log("we here"),
  {
    type: types.CHECK_NOW,
    payload: statusObj,
  }
);

export const finishedUrlAdd = (addedUrlObj) => ({
  
  
});