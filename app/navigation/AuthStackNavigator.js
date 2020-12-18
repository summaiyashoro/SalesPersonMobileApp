import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../auth/SignInScreen';
import ForgotPasswordScreen from '../auth/ForgotPasswordScreen';
import TabNavigation from '../navigation/TabNavigation';

import colors from '../config/colors';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        shadowColor: 'transparent',
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

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