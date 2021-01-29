

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import UserHome from './components/user_home';



//const nav = this.props.navigation

//const Stack = createStackNavigator();

const Stack = createStackNavigator();

class App extends Component{

  static navigationOptions = { header: null }

  render(){

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
          <Stack.Screen name="User Home" component={UserHome} options={{headerShown: false}} />
        </Stack.Navigator>        
      </NavigationContainer>  
    );
  }
}



export default App;
