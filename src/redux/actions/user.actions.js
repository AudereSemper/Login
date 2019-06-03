import {
  USER_INFO_FAILED,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS
} from '../types';

export const userInfoRequest = (data) => ({
  type: USER_INFO_REQUEST,
  data
});

export const userInfoSuccess = (data) => ({
  type: USER_INFO_SUCCESS,
  data
});

export const userInfoFailed = () => ({
  type: USER_INFO_FAILED
});