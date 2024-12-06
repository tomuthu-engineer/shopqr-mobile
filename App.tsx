import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './src/navigation/stack/authStack';
import {AuthProvider} from './src/context';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
