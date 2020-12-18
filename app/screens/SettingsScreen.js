import React from 'react';
import Screen from './Screen';
import Settings from '../settings/Settings';

function SettingsScreen({navigation}) {
    return (
        <Screen>
            <Settings navigation={navigation}/>
        </Screen>
    );
}

export default SettingsScreen;