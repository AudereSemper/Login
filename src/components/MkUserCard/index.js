import React, { PureComponent } from 'react';
import { View, Image,ImageBackground, } from 'react-native';
import { styles } from './style';
import MkTextInput from '../MkTextInput';


class MkUserCard extends PureComponent {
  state = {
    name: '',
    surname: '',
    city: '',
    birthDate: '',
    birthPlace: '',
    address: '',
    email: '',
    ssn: '',
  }

  componentDidMount() {
    const {
      firstName,
      lastName,
      username,
      email
    } = this.props;

    this.setState({
      name: firstName,
      surname: lastName,
      username: username,
      email: email,
    })
  }

  textChanged = fieldName => newValue => this.setState({ [fieldName]: newValue });

  render() {
    console.log('state --->',this.state);
    const { name, 
            surname,
            city, 
            birthDate,
            birthPlace,
            address,
            email, 
            ssn } = this.state;

    return (
      <View style={styles.flexOne}>
        <ImageBackground
          source={{ uri: 'https://previews.123rf.com/images/elenarolau/elenarolau1605/elenarolau160500032/57169969-colorful-watercolor-stains-background-light-pastel-colors-violet-sky-blue-pink-watercolour-template-.jpg' }}
          style={{ flex: 1 }}
        > 
        <View style={styles.container}>
          <View style={styles.flexOne}>
          <Image style={styles.image}
            source={{ uri: 'https://banner2.kisspng.com/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg' }}
            />
          </View>
          <View style={styles.flexOne}>
              <MkTextInput 
                placeholderName='Name' 
                firstNameAndLastNameValidation 
                value={name} 
                stacked
                disabled
                />  
              <MkTextInput 
                placeholderName='Surname' 
                firstNameAndLastNameValidation 
                value={surname} 
                stacked
                disabled
                />
          </View>
        </View> 
        </ImageBackground>  

        <View style={styles.flexOneCentered}>

          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <MkTextInput 
                placeholderName='City' 
                firstNameAndLastNameValidation 
                value={city} 
                onChangeText={this.textChanged('city')} 
                stacked
                disabled
                />
            </View>
            <View style={styles.inputContainer}>
              <MkTextInput 
                placeholderName='Address' 
                firstNameAndLastNameValidation 
                value={address} 
                onChangeText={this.textChanged('address')} 
                stacked
                disabled
                />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <MkTextInput 
                placeholderName='Birth date dd/mm/yy' 
                birthDateValidation 
                value={birthDate} 
                onChangeText={this.textChanged('birthDate')} 
                stacked
                disabled
                />
            </View>
            <View style={styles.inputContainer}>
              <MkTextInput 
                placeholderName='Birth place' 
                firstNameAndLastNameValidation 
                value={birthPlace} 
                onChangeText={this.textChanged('birthPlace')} 
                stacked
                disabled
                />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <MkTextInput 
                placeholderName='Email' 
                emailValidation 
                value={email} 
                onChangeText={this.textChanged('email')} 
                stacked
                disabled
                />
            </View>
            <View style={styles.inputContainer}>
              <MkTextInput 
                placeholderName='SSN' 
                firstNameAndLastNameValidation 
                value={ssn} 
                onChangeText={this.textChanged('ssn')} 
                stacked
                disabled
                />
            </View>
          </View>

        </View>

      </View>
    );
  }
}

export default MkUserCard;
