import { LOGIN_SAVED, SCORE_SAVED } from '../actions';

const INITIAL_STATE = {
  image: '',
  name: '',
  score: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SAVED:
    return {
      ...state,
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

export default reducer;
