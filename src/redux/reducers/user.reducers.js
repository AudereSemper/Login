import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILED,
} from '../types';

const initialState = { 
  request: false,
  userAccount: [],
}

export default ( state = initialState, action) => {
  switch(action.type) {
    case USER_INFO_REQUEST:
      return {
        ...state,
        request: true,
      }
    case USER_INFO_SUCCESS:
      return {
        ...state,
        request:false,
        userAccount: action.data
      }
    case USER_INFO_FAILED:
      return {
        ...state,
        request: false,
        error: 'User connection error'
      }
    default: 
      return state
  }
}