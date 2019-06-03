import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../types';

const initialState = {
  request: false,
  loginInfo: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        request: true,
        loginInfo: action.data,
      };
    case LOGIN_FAILED: 
      return {
        ...state,
        request: false,
        error: 'Error connection'
      }
    case LOGIN_SUCCESS:
    return {
        ...state,
        request: false,
        loginInfo: action.data
      }
    default:
      return state
  }
}