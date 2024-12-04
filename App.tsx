import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginscreen from './src/screens/Auth/LoginScreen';
import SingUpScreen from './src/screens/Auth/SingUpScreen';
import VerificationScreen from './src/screens/Auth/VerificationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loginscreen"
          component={Loginscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SingUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="VerificationScreen"
        component={VerificationScreen}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
