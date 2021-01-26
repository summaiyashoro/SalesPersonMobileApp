import React from 'react';
import {ScrollView, StyleSheet } from 'react-native';

import AccountSettingHeader from './AccountSettingHeader';
import Heading from './Heading';
import Separator from '../components/Separator';
import SettingSwitch from './SettingSwitch';
import AppPicker from '../components/AppPicker';
import LogOutButton from '../buttons/LogOutButton';
import AppButton from '../buttons/AppButton';

import defaultProfileUri from "../components/defaultProfile"; 

const imageSource = defaultProfileUri;
import Screen from '../screens/Screen';

function SettingScreen({ navigation }) {

    return (
        <Screen>
            <ScrollView contentContainerStyle={styles.container}>
                <AccountSettingHeader title="Muhammad Omer Khan" imageSource={imageSource} onPress={() => navigation.navigate('AccountSettings')} />

                <Heading heading="About" />

                <SettingSwitch title="Status" />
                <Separator />

                <AppPicker title="Privacy Policy" onPress={() => console.log("go to privacy policy")} />
                <Separator />

                <AppPicker title="Terms of use" onPress={() => console.log("go to Terms of use")} />
                <Separator />

                <Heading heading="App" />

                <SettingSwitch title="Notifications" />
                <Separator />

                <AppPicker title="Support" onPress={() => console.log("go to Support")} />
                <Separator />

                <AppPicker title="Report a Bug" onPress={() => console.log("go to Report a bug")} />
                <Separator />

                <AppPicker title="App Version 1.0" onPress={() => console.log("go to App version 1.0")} />
                <Separator />

                <LogOutButton title="Logout" onPress={() => console.log('logout')} />

            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        paddingVertical: 20
    }
})

export default SettingScreen;