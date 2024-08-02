import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductWrapper from './src/Components/ProductWrapper';
import UserList from './src/Components/UserList';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={ProductWrapper} />
        <stack.Screen name="User" component={UserList} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
