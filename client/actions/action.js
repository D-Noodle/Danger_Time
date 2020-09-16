import * as types from '../constants/actionTypes';
import axios from 'axios';

export function addURL (username, url) {
  return function dispatchFetchToStore (dispatch) {
    axios.post('http://localhost:3333/main/addURL', `${url}`)
      .then((result)=>{
        console.log("YOO!!")
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
  }
};


// GET UPDATED API STATUS 
export const checkNow = (statusObj) => (
  console.log("we here"),
  {
    type: types.CHECK_NOW,
    payload: statusObj,
  }
);

<<<<<<< HEAD
checkNow() {
  return axios
    .post(
      "http://localhost:3000/main/checkNow",
      {
        url_id: this.props.url_id,
        url: this.props.url,
      }
    )
    .then((status) => this.props.dispatchCheckStatus(
      {
        status: status.data.status,
        url_id: this.props.url_id,
      })
    )
    .catch((err) => {
      console.error(err.messsage);
    });
}
=======
export const finishedUrlAdd = (addedUrlObj) => ({
  
  
});
>>>>>>> a4d8b400f87d08c8ff1facc7dbea6f79da7189c2
