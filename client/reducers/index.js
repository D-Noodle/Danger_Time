import { combineReducers } from 'redux';
import outputReducer from './outputReducer';

// combining reducers
const reducers = combineReducers({
  outputs: outputReducer,
});

export default reducers;
