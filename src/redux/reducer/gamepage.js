import { SCORE_SAVED, GRAVATAR_REQUEST } from '../actions';

const INITIAL_STATE = {
  gravatar: '',
  score: 0,
};

const gamePage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GRAVATAR_REQUEST:
    return {
      ...state,
      email: payload,
      gravatar: `https://www.gravatar.com/avatar/${payload}`,
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

export default gamePage;
