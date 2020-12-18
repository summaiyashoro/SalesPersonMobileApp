
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Text
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import AppText from "./AppText";


const AppPicker = ({ title, onPress }) =>{
    return (
        <TouchableWithoutFeedback onPress={onPress}>

            <View style={styles.container}>
                <AppText style={styles.text}>{title}</AppText>
                <MaterialCommunityIcons
                    name="chevron-right"
                    color={colors.medium}
                    size={20}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        paddingVertical: 5,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.dark
    }
})

export default AppPicker;

