import React, { PureComponent } from 'react';
import { View } from 'react-native';
import MkTextInput from '../../components/MkTextInput';
import MkButton from '../../components/MkButton';
import { connect } from 'react-redux'; 
import { emailValidator, usernameValidator, firstNameAndLastNameValidator } from '@utils';
import { registrationRequest } from '../../redux/actions/';

class RegisterScreen extends PureComponent {
  state = {
    name: '',
    surname: '',
    email: '', 
    username: '',
  }

  textChanged = fieldName => newValue => this.setState({ [fieldName]: newValue });

  handleSubmit(data) {
    const { request } = this.props

    request(data);
  }

  render() {

    const { name, 
            surname, 
            email, 
            username } = this.state;
            
    const data = { name, surname, email, username };

    const checked = (firstNameAndLastNameValidator(name) && firstNameAndLastNameValidator(surname) && emailValidator(email) && usernameValidator(username));

    return (
      <View>
        <MkTextInput placeholderName='name' firstNameAndLastNameValidation value={name} onChangeText={this.textChanged('name')} />
        <MkTextInput placeholderName='Surname' firstNameAndLastNameValidation value={surname} onChangeText={this.textChanged('surname')} />
        <MkTextInput placeholderName='E-mail' emailValidation value={email} onChangeText={this.textChanged('email')} />
        <MkTextInput placeholderName='Username' usernameValidation value={username} onChangeText={this.textChanged('username')} />
        <MkButton label='Register' check={checked} buttonType='button' onPress={() => this.handleSubmit(data)} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  registerInfo: state.registerInfo
});

export default connect(
  mapStateToProps,
  {
    request: registrationRequest,
  }
)(RegisterScreen);

