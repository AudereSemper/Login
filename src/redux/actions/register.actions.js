import {
  REGISTRATION_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
} from '../types';

export const registrationRequest = (data) => ({
  type: REGISTRATION_REQUEST,
  data
});

export const registrationFailed = () => ({
  type: REGISTRATION_FAILED,
});

export const registrationSucces = (data) => ({
  type: REGISTRATION_SUCCESS,
  data
});