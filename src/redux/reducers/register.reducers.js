import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED
} from '../types';

const initialState = {
  request: false,
  registerInfo: [],
  account: [],
}

export default ( state = initialState, action) => {
  switch(action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        request: true,
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        request: false,
        registerInfo: action.data,
      }
    case REGISTRATION_FAILED:
      return {
        ...state,
        request: false,
        error: 'Connection error',
      }
      default:
        return state
  }
}