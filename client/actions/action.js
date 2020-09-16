import * as types from '../constants/actionTypes';
import axios from 'axios';

// ADD API URL TO DATABASE
export function addURL (username, url) {
  return function dispatchFetchToStore (dispatch) {
    axios.post('http://localhost:3333/main/addURL', `${url}`)
      .then((result)=>{
        console.log('inside addURL action POST')
        dispatch({
          type: types.FINISHED_URL_ADD,
          payload: {
            username,
            url,
            url_id: result.data.url_id,
            status: result.data.status,
          }
        });
      })
      .catch(err => console.log('addURL action ERROR', err))
  }
};

// GET UPDATED API URL STATUS 
export const checkStatus = (url_Id) => (dispatch) => {
  // **INSERT API URL**
    axios.post('http://localhost:3000/main/checkStatus', {url_Id: url_Id})
      .then((result)=>{
        console.log('inside checkStatus action POST')
        dispatch({
          type: types.FINISHED_URL_ADD,
          payload: {}
        });
      })
      .catch(err => console.log('checkStatus action ERROR', err))
  }


const checkStatusStarted = () => {
  return {
    type: types.CHECK_STATUS_STARTED,
    payload: true
  }
}

const checkStatusFinished = () => {
  return {
    type: types.CHECK_STATUS_FINISHED,
    payload: true
  }
}

const checkStatusError = () => {
  return {
    type: types.CHECK_STATUS_ERROR,
    payload: true
  }
}


export const finishedUrlAdd = (addedUrlObj) => ({  
});
