import { LOGIN_SAVED, SCORE_SAVED } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  email: '',
  score: 0,
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SAVED:
    return {
      ...action.payload,
    };
  case SCORE_SAVED:
    return {
      ...state,
      score: state.score + action.payload,
    };
  default:
    return state;
  }
};

export default login;
