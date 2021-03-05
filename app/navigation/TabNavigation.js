import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeButton from './HomeButton';
import SettingsStackNavigator from './SettingsStackNavigator';
import MapStackNavigator from "./MapStackNavigator";
import NotificationsStackNavigator from "./NotificationsStackNavigator";
import HistoryStackNavigator from "./HistoryStackNavigator";
import HomeStackNavigator from './HomeStackNavigator';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                style: {
                    backgroundColor: "#fff",
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name="History"
                component={HistoryStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="history"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Maps"
                component={MapStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="map-marker"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={({ navigation }) => ({
                    title: 'Home',

                    tabBarButton: () => <HomeButton onPress={() =>
                        navigation.navigate("Home")

                    } />
                })}
            />

            <Tab.Screen
                name="Notifications"
                component={NotificationsStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog-transfer-outline"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation;
