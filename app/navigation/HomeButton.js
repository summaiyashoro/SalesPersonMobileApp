import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import AppText from "../components/AppText";

const HomeButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="home"
                        color={colors.white}
                        size={28}
                    />
                </View>
                <AppText style={styles.text}>Home</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        backgroundColor: colors.light,
        width: 58,
        height: 58,
        borderRadius: 30,
        bottom: 7,
        borderColor: colors.white,
        borderWidth: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 10,
        color: colors.light,
        bottom: 17,
        textAlign: 'center'
    }
})

export default HomeButton;