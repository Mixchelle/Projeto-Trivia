import {
  LOGIN_SAVED,
  INCREMENT_SCORE,
} from '../actions';

const INITIAL_STATE = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
  questions: 0,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SAVED:
    return {
      ...state,
      player: {
        ...state.player,
        ...action.payload,
      },
    };
  case INCREMENT_SCORE:
    return {
      ...state,
      player: {
        ...state.player,
        score: state.player.score + action.payload,
      },
      questions: state.questions + 1,
    };
  default:
    return state;
  }
};

export default rootReducer;
