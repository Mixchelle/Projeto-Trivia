import md5 from 'crypto-js/md5';

export const GRAVATAR_REQUEST = 'GRAVATAR_REQUEST';
export const GRAVATAR_REQUEST_FAIL = 'GRAVATAR_REQUEST_FAIL';
export const SCORE_SAVED = 'SCORE_SAVED';
export const LOGIN_SAVED = 'LOGIN_SAVED';

export const loginAction = (personalInfo) => ({
  type: LOGIN_SAVED,
  payload: {
    personalInfo,
  },
});

export const scoreSaved = (payload) => ({
  type: SCORE_SAVED,
  payload,
});

export const gravatarRequest = (hash) => ({
  type: SAVE_GRAVATAR,
  payload: hash,
});

export const gravatarRequestFail = (error) => ({
  type: GRAVATAR_REQUEST_FAIL,
  payload: error,
});

export const fetchGravatar = (gravatarEmail) => async (dispatch) => {
  try {
    dispatch(gravatarRequestStarted());
    const hash = await md5(gravatarEmail).toString();
    const gravatar = (`https://www.gravatar.com/avatar/${hash}`);
    dispatch(gravatarRequest(gravatar));
  } catch (erro) {
    dispatch(gravatarRequestFail());
  }
};
