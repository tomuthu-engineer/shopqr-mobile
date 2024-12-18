import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../screens/User/HomeScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
