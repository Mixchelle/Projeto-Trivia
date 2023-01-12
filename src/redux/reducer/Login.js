import { LOGIN_SAVED } from '../actions';

const INITIAL_STATE = {
  name: 'Nome da pessoa',
  email: 'email@pessoa.com',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SAVED:
    return {
      ...state,
      name: state.name,
      email: state.email,
    };
  default:
    return state;
  }
};

export default login;
