import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import NotificationsScreen from '../screens/NotificationsScreen';
import NotificationsDetailsScreen from '../notification/NotificationsDetailsScreen';

import colors from '../config/colors';

const Stack = createStackNavigator();

const NotificationsStackNavigator = () => (
  <Stack.Navigator 
  initialRouteName="Notifications"
  screenOptions={{
    headerStyle: {
      shadowColor: 'transparent',
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    headerTitleAlign: 'center',
    headerRight: () => (
      <Icon name="ellipsis-vertical-outline" size={20} color={colors.white} />
    )
  }}>


    <Stack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        title: 'Notifications',
        headerLeft: null,
      }}
    />

 <Stack.Screen
      name="NotificationsDetailsScreen"
      component={NotificationsDetailsScreen}
      options={{
        title: 'Notification'
      }}
    />    
  </Stack.Navigator>
)

export default NotificationsStackNavigator;