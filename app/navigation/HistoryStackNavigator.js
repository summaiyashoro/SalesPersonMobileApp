import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

import HistoryScreen from '../history/HistoryScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();


const HistoryStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={({ navigation }) => ({
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
    headerTitleAlign: 'center',
    headerRight: () => (
      <Icon name="ellipsis-vertical-outline" size={20} color={colors.white} />
    )
  })}>
    <Stack.Screen
      name="History"
      component={HistoryScreen}
      options={{
        title: 'History',
        headerLeft: null,
      }}
    />

  </Stack.Navigator>
)

export default HistoryStackNavigator;