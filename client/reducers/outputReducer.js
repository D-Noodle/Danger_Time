
import * as types from '../constants/actionTypes';


const initialState = {
  /* Dummy Data this would be for pulling from DB */
  urlList: [
    {
      username: 'Lucy', url: 'www.yahoo.com', status: 400, url_id: 80,
    },
    {
      username: 'Chris', url: 'www.coinbase.com', status: 400, url_id: 81,
    },
    {
      username: 'Joon', url: 'www.facebook.com', status: 400, url_id: 90,
    },
  ],
  newEndpoint: '',
  status: '',
  currentUser: '',
  // graphData(maybe time/)
};

const outputReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case types.ADD_URL:

      const newURLobj = action.payload;
      let copyUrlList = state.urlList.slice();
      copyUrlList.push(newURLobj);
      
      const newStatus = action.payload.status;

      return {
        ...state,
        urlList: copyUrlList,
        status: newStatus,
      };

   
    case types.CHECK_NOW:
      
      const newStatusObj = action.payload;
      console.log(newStatusObj)
      copyUrlList = state.urlList.slice();

      copyUrlList.forEach((item) => {
        if (item.url_id === newStatusObj.url_id) {
          item.status = newStatusObj.status;
        }
      });
      console.log(copyUrlList)
      return {
        ...state,
        urlList: copyUrlList,
      };

    default:
      return state;
  }
};

export default outputReducer;

