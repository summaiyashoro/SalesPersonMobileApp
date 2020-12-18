import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HistoryScreen from '../screens/HistoryScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();


const HistoryStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={({ navigation }) => ({
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