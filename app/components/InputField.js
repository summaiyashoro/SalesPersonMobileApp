import React from 'react';
import { StyleSheet, TextInput, Platform } from 'react-native';

import colors from '../config/colors';

const InputField = ({ onFocus, onBlur, ...otherProps }) => (
    <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.textInput}
        {...otherProps}
    />
)


const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        flex: 1,
    }
})





export default InputField;