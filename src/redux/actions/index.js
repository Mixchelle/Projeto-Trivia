export const LOGIN_SAVED = 'LOGIN_SAVED';
export const ACTION_LOGIN_SAVED = (payload) => ({
  type: LOGIN_SAVED,
  payload,
});

export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const ACTION_INCREMENT_SCORE = (dispatch, payload) => {
  dispatch({
    type: INCREMENT_SCORE,
    payload,
  });
};
