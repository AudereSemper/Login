import { takeLatest } from 'redux-saga/effects';
import {
  USER_INFO_REQUEST,
  LOGIN_REQUEST,
  REGISTRATION_REQUEST
} from '../types';
import { fetchLogin, fetchRegister, fetchUserInfo } from './endPointCall.saga';

export default function * root () {
  yield takeLatest(LOGIN_REQUEST, fetchLogin);
  yield takeLatest(REGISTRATION_REQUEST, fetchRegister);
  yield takeLatest(USER_INFO_REQUEST, fetchUserInfo);
};