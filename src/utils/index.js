import AsyncStorage from '@react-native-community/async-storage';

export const usernameValidator = (data) => {

  if (data !== '' && !isTooShort(data)) {
    return true
  } else {
    return false
  }
};

export const isTooShort = (value) => {
  const minLength = 8;
  const passwordLength = value && value.length < minLength;

  return passwordLength;
};

export const passwordValidator = (str) => {
    if (str.length < 6) {
      return false;
    } else if (str.length > 50) {
      return false;
    } else if (str.search(/\d/) == -1) {
      return false;
    } else if (str.search(/[a-zA-Z]/) == -1) {
      return false;
    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
      return false;
    }
    return true;
}

export const emailValidator = (email) => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let checked = (pattern.test(String(email).toLowerCase()));
  return checked;
}

export const firstNameAndLastNameValidator = (string) => {
  let pattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  let checked = (pattern.test(string));
  return checked;
} 

export const birthDateValidator = (date) => {
  var pattern = /^ (?: (?: 31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  let checked = (pattern.test(date))
  return checked
}


