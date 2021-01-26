import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../auth/SignInScreen';
import ForgotPasswordScreen from '../auth/ForgotPasswordScreen';
import TabNavigation from '../navigation/TabNavigation';

import colors from '../config/colors';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleStyle:{
       fontFamily:Platform.OS === 'android' ? 'OpenSans-Regular' : 'Avenir',
       fontSize:20,
       fontWeight:'700'
      },
      headerStyle: {
        shadowColor: 'transparent',
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleAlign: 'center'
    }}>

      <Stack.Screen
        name="Login"
        component={SignInScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password'
        }}
      />



      <Stack.Screen
        name="logedIn"
        component={TabNavigation}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator;