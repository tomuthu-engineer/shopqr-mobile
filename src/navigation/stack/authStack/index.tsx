import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loginscreen from '../../../screens/Auth/LoginScreen';
import SignUpScreen from '../../../screens/Auth/SingUpScreen';
import VerificationScreen from '../../../screens/Auth/VerificationScreen';
import ForgotPasswordScreen from '../../../screens/Auth/ForgotPasswordScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        cardStyleInterpolator: ({current, layouts}) => ({
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 0],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
            ],
          },
          overlayStyle: {
            opacity: current.progress.interpolate({
              inputRange: [0, 0],
              outputRange: [0, 0],
            }),
          },
        }),
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={Loginscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: '',
          headerStyle: {elevation: 0, height: 50},
        }}
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
  );
};
