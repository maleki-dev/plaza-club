import { userTypes } from './user.types';

export const addUser = user => ({
  type: userTypes.ADD_USER,
  payload: user,
});

export const userLogin = user => ({
  type: userTypes.USER_LOGIN,
  payload: user,
});

export const userLogout = () => ({
  type: userTypes.USER_LOGOUT,
});
