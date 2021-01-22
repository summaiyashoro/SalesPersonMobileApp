import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import MapScreen from '../map/MapScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const MapStackNavigator = () => (
  <Stack.Navigator screenOptions={{
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
      name="Maps"
      component={MapScreen}
      options={{
        title: 'Maps',
        headerLeft: null,
      }}
    />

  </Stack.Navigator>
)

export default MapStackNavigator;