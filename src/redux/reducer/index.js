import { combineReducers } from 'redux';
import login from './Login';
import gamePage from './gamepage';

const rootReducer = combineReducers({
  login, gamePage,
});

export default rootReducer;
