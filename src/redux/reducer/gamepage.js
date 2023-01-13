import { GET_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  player: {
    name: '',
    assertions: '',
    score: 0,
    gravatarEmail: '',
  },
  questions: [],
  players: [],
};

const gamepage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  default:
    return state;
  }
};

export default gamepage;
