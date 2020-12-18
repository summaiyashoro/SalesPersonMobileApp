import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

const ErrorMessage = ({ error, touch }) => {
    if (!touch || !error) return null;

    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        color: colors.danger,
        fontSize: 12,
        textAlign: 'right'
    }
})
export default ErrorMessage;