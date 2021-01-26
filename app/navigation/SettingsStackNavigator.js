import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountSettingsScreen from '../accountsettings/AccountSettingsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import colors from '../config/colors';
import { Platform } from 'react-native';

const  Stack = createStackNavigator();

const SettingsStackNavigator = () =>(
      <Stack.Navigator
      initialRouteName="Settings"
      mode="modal"
      
      screenOptions={{
        headerTitleStyle:{
          fontFamily:Platform.OS === 'android' ? 'OpenSans-Regular' : 'Avenir',
          fontSize:20,
          fontWeight:'700'
         },
        headerStyle:{
          shadowColor:'transparent',
          backgroundColor:colors.primary,
        },
        headerTintColor:colors.white,
        headerTitleAlign:'center'  
      }}
      >
          <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            title:"Settings",
            headerLeft:null,
            headerTitleAlign:'center'
          }}
          />

          <Stack.Screen 
          name="AccountSettings" 
          component={AccountSettingsScreen} 
          options={{
            title:"Account Settings"
          }}
          />

      </Stack.Navigator>
  )

export default SettingsStackNavigator;