import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

import HomeScreen from "../home/HomeScreen";
import MapScreen from "../map/MapScreen";
import colors from '../config/colors';
const Stack = createStackNavigator();

const HomeStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerTitleStyle: {
        fontFamily: Platform.OS === 'android' ? 'OpenSans-Regular' : 'Avenir',
        fontSize: 20,
        fontWeight: '700'
      },
      headerStyle: {
        shadowColor: 'transparent',
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleAlign: 'center',
      headerRight: () => (
        <Icon name="ellipsis-vertical-outline" size={20} color={colors.white} />
      )
    })}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Dashboard"
      }}
    />

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

export default HomeStackNavigator;