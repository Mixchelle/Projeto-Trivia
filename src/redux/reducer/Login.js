import { LOGIN_SAVED } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  email: '',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SAVED:
    return {
      ...action.payload,
    };
  default:
    return state;
  }
};

export default login;
