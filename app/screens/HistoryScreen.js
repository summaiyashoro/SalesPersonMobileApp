import React from 'react';
import {ScrollView} from 'react-native';
import Screen from './Screen';
import History from '../history/History';



function HistoryScreen(props) {
    return (
        <Screen >
            <History />
        </Screen>
    );
}

export default HistoryScreen;