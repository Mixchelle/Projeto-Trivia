export const SCORE_SAVED = 'SCORE_SAVED';
export const LOGIN_SAVED = 'LOGIN_SAVED';
export const SAVE_POINTS = 'SAVE_POINTS';
export const SAVE_PLAYER_ASSERTIONS = 'SAVE_PLAYER_ASSERTIONS';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export const loginAction = (payload) => ({
  type: LOGIN_SAVED,
  payload,
});

export const scoreSaved = (payload) => ({
  type: SCORE_SAVED,
  payload,
});

export const savePlayerPoints = (payload) => ({
  type: SAVE_POINTS,
  payload,
});

export const savePlayerAssertions = (playerAssertions) => ({
  type: SAVE_PLAYER_ASSERTIONS,
  playerAssertions,
});

export const getQuestions = (payload) => ({
  type: GET_QUESTIONS,
  payload,
});
