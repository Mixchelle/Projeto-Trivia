import { LOGIN_SAVED } from '../actions';

const INITIAL_STATE = {
  name: 'Nome da pessoa',
  email: 'alguem@email.com',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SAVED:
    return {
      ...state,
      name: action.data.name,
      email: action.data.email,
    };
  default:
    return state;
  }
};

export default login;
