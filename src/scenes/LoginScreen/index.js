import React, { PureComponent, } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';
import MkTextInput from '../../components/MkTextInput';
import MkButton from '../../components/MkButton';
import { usernameValidator, passwordValidator } from '@utils';
import { loginRequest } from '../../redux/actions/';

class LoginScreen extends PureComponent {
  state = {
    username: '',
    password: '',
    nonce: undefined, 
    authToken: '',
  }

  componentDidMount() {
    this.setState({ nonce: uuid.v4() });
  }
  
  textChanged = fieldName => newValue => this.setState({ [fieldName]: newValue });

  // chiedere se e' opportuno utilizzare il local storage e se si, come usarlo.
  // getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key')
  //     if (value !== null) {
  //       return value
  //     } 
  //   } catch (e) {
  //     // error reading value
  //   }
  // }

  handleSubmit(data) {
    const { request, navigation, login } = this.props
    const { loginInfo } = login;
    const { decoded } = loginInfo;

    request(data);

    //Devi assolutamente mettere un controllo: se i dati dell'utente non trovassero riscontro ? 
    navigation.navigate('userInfoScreen', { account:decoded } )
  }

  render() {

    const { username, password } = this.state;
    const data = {username, password};
    const checked = (usernameValidator(username) && passwordValidator(password))


    return(
      <View>
        <MkTextInput placeholderName='Username' usernameValidation value={username} onChangeText={this.textChanged('username')} />
        <MkTextInput placeholderName='Password' passwordValidation value={password} onChangeText={this.textChanged('password')} />
        <MkButton label='Login' check={checked} buttonType='button' onPress={() =>this.handleSubmit(data)} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  login: state.logList
});

export default connect(
  mapStateToProps,
  {
    request: loginRequest,
  }
)(LoginScreen);