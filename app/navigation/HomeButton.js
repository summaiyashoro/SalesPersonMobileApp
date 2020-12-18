import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

const HomeButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="home"
                        color={colors.white}
                        size={30}
                    />
                </View>
                <Text style={styles.text}>Home</Text>
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
        backgroundColor: colors.medium,
        width: 60,
        height: 60,
        borderRadius: 30,
        bottom: 7,
        borderColor: colors.white,
        borderWidth: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 10,
        color: colors.medium,
        bottom: 19,
        textAlign: 'center'
    }
})

export default HomeButton;