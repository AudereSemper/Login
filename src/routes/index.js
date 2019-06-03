import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import LoginScreen from '../scenes/LoginScreen';
import RegisterScreen from '../scenes/RegisterScreen';
import UserInfoScreen from '../scenes/UserInfoScreen';

export const mainStack = createStackNavigator({
  loginPage: {
    screen: LoginScreen,
    gesturesEnabled: false,
  },
  registerPage: {
    screen: RegisterScreen,
    gesturesEnabled: false
  },
  userInfoScreen: {
    screen: UserInfoScreen,
    gesturesEnabled: false,
  }
},
{
  initialRouteName: 'loginPage'
})

const AppContainer = createAppContainer(mainStack);

export default AppContainer;