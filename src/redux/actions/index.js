export const LOGIN_SAVED = 'LOGIN_SAVED';
export const SCORE_SAVED = 'SCORE_SUCCEEDED';

export const loginAction = (payload) => ({
  type: LOGIN_SAVED,
  payload,
});

export const scoreAction = (payload) => ({
  type: SCORE_SUCCEEDED,
  payload,
});
