/*
    Author: Akshin Goswami
    Date:   25/05/2021
    
    @brief:
    This is a navigator component that handles the authentication status of the user.
*/
// import stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens for navigator
import { WelcomeScreen } from '../Screens/WelcomeScreen';
import { LoginScreen } from '../Screens/LoginScreen';
import { SignupScreen } from '../Screens/SignupScreen';

const authStack = createNativeStackNavigator();

export const AuthNavigator = ({ navigation }) => {
  return (
    <authStack.Navigator
      initialRouteName='WelcomeScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <authStack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <authStack.Screen name='LoginScreen' component={LoginScreen} />
      <authStack.Screen name='SignupScreen' component={SignupScreen} />
    </authStack.Navigator>
  );
};
