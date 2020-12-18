
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from '../app/navigation/AuthStackNavigator';
import NavigationTheme from '../app/navigation/NavigationTheme';

import colors from './config/colors';


const App = () => {
  return ( 
     <>
     <StatusBar  backgroundColor={colors.primary} barStyle="light-content" />
      <NavigationContainer theme={NavigationTheme}>
        <AuthStackNavigator/>
      </NavigationContainer>
     </>
  );
};

export default App;
