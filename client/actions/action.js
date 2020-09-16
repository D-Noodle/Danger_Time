import * as types from '../constants/actionTypes';

export const addURL = (urlObj) => ({
  type: types.ADD_URL,
  payload: urlObj,
});


// GET UPDATED API STATUS 
export const checkNow = (statusObj) => (
  console.log("we here"),
  {
    type: types.CHECK_NOW,
    payload: statusObj,
  }
);

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