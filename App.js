import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Login from './screens/Login'
import { createAppContainer } from 'react-navigation'
import AppNavigator from './navigation/Navigator'

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  return ( 
  <AppContainer />
  ); 
} 





