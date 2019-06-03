import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


class MkButton extends PureComponent {

  render() {
    
    const { label, check, buttonType, onPress } = this.props

    if(buttonType === 'button') {
      return (
        <View style={styles.container}>
          <Button
            full
            disabled={!check}
            success={check}
            onPress={onPress}
          >
            <Text>{label}</Text>
          </Button>
        </View> 
      )
    } return (
      <View>
        <TouchableOpacity>
          <Text>Default button</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default MkButton;