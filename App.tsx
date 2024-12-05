import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Loginscreen from './src/screens/Auth/LoginScreen';
import SingUpScreen from './src/screens/Auth/SingUpScreen';
import VerificationScreen from './src/screens/Auth/VerificationScreen';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={Loginscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SingUpScreen}
          options={{title:'',headerStyle:{elevation:0,height:50}}}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
