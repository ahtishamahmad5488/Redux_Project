import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductWrapper from './src/Components/ProductWrapper';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={ProductWrapper} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
