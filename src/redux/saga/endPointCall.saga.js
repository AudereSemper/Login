import { put } from 'redux-saga/effects';
import { 
  loginSuccess, 
  loginFailed, 
  registrationSuccess, 
  registrationFailed, 
  userInfoSuccess,
  userInfoFailed
} from '../actions';
import jwt_decode from 'jwt-decode';

function* fetchLogin (data) {
  const url = 'https://mycare-api.alteadigital.it/auth/login'
  try {
    const payload = yield fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'it-IT',
        'x-basic-user': 'mycare',
      },

      body: JSON.stringify({
        role: 'patient',
        username: data.data.username,
        password: data.data.password
      })
    })
    .then(response => response.json())
    .then((responseJson) => responseJson)

    var decoded = jwt_decode(payload.data.accessToken);

    yield put(loginSuccess({payload:payload.data, decoded}));
  } catch (err) {
    yield put(loginFailed(err));
  }
};

function* fetchRegister (data) {
  const url = 'https://mycare-api.alteadigital.it/auth/register'

  try {
  const payload = yield fetch(url, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'it-IT',
        'x-basic-user': 'mycare',
      },

      body: JSON.stringify({
        role: 'patient',
        firstName: data.data.name,
        lastName: data.data.surname,
        email: data.data.email,
        username: data.data.username
      })
    }).then(response => response.json())

    yield put(registrationSuccess(payload.data));
  } catch (e) {
    yield put(registrationFailed(e))
  }
};

function* fetchUserInfo(data) {
  //vedi select di redux saga per prendere il token da redux 
  console.log(data.data);
  const url = `https://mycare-api.alteadigital.it/users/${data.data}`
  try{
    const payload = yield fetch(url).then(res => res.json())

    yield put(userInfoSuccess(payload));
  } catch (err) {
    yield put(userInfoFailed(err));
  }
}

export { fetchLogin, fetchRegister, fetchUserInfo };