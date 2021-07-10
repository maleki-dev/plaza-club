import { userTypes } from './user.types';
import { addUser } from './user.utils';

const INITIAL_STATE = {
  users: [],
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.ADD_USER:
      return {
        ...state,
        users: addUser(action.payload, state.users),
      };

    case userTypes.USER_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };

    case userTypes.USER_LOGOUT:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
