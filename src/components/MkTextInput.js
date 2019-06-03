import React, { PureComponent } from 'react';
import { Item, Input, Icon, Label, View } from 'native-base';
import { usernameValidator, 
        passwordValidator, 
        emailValidator, 
        firstNameAndLastNameValidator,
        birthDateValidator } from '@utils';
import { styles } from './styles';

class MkTextInput extends PureComponent {
  state = {
    data: '',
  }

  render() {
    const { placeholderName, 
            usernameValidation, 
            passwordValidation, 
            emailValidation, 
            birthDateValidation,
            firstNameAndLastNameValidation,
            onChangeText, 
            value,
            stacked,
            disabled
          } = this.props;

    const checkedUsername = usernameValidator(value) ? <Icon name='checkmark-circle'/> : !value || (value !== null && <Icon name='close-circle'/>);
    const checkedPassword = passwordValidator(value) ? <Icon name='checkmark-circle' /> : !value || (value !== null && <Icon name='close-circle'/>);
    const checkedEmail = emailValidator(value) ? <Icon name='checkmark-circle' /> : !value || (value !== null && <Icon name='close-circle' />); 
    const checkedNameOrSurname = firstNameAndLastNameValidator(value) ? <Icon name='checkmark-circle' /> : !value || (value !== null && <Icon name='close-circle' />);
    const checkedBirthDate = birthDateValidator(value) ? <Icon name='checkmark-circle' /> : !value || (value !== null && <Icon name='close-circle' />);
          
      if (stacked) {
      return (
      <View style={{borderBottomWidth: 1}}>
        <Item stackedLabel>
          <Label >{placeholderName}</Label>
          <Input disabled={disabled ? true : false} value={value}/>
        </Item>
      </View>
      )
    } return (
      <Item style={styles.inputContainer}>
        <Input
          placeholder={placeholderName}
          onChangeText={onChangeText}
          autoCapitalize='none'
          secureTextEntry={passwordValidation ? true : false}
        />
        {birthDateValidation ? checkedBirthDate : null}
        {usernameValidation ? checkedUsername : null}
        {passwordValidation ? checkedPassword : null}
        {emailValidation ? checkedEmail : null}
        {firstNameAndLastNameValidation ? checkedNameOrSurname : null}
      </Item>
    )
  }
}

export default MkTextInput;
