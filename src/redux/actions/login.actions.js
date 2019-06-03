import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../types'; 

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data
});

export const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});




