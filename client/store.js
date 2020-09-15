import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

// we are adding composeWIthDevTools here to get easy access to the Redux dev tools
const store = createStore(
  reducers,
  applyMiddleware(thunk),
  // composeWithDevTools(),
);

export default store;
