import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountSettingsScreen from '../accountsettings/AccountSettingsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import colors from '../config/colors';

const  Stack = createStackNavigator();

const SettingsStackNavigator = () =>(
      <Stack.Navigator
      initialRouteName="Settings"
      mode="modal"
      
      screenOptions={{
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