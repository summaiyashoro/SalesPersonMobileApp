import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../config/colors";
import SwitchWithText from "../components/SwitchWithText";

function Activity({ icon, title, status, px, ...otherProps }) {
    const getStyle = () => {
        switch (status) {
            case 'active':
                return colors.lightGreen
                break;
            case 'inactive':
                return colors.danger
                break;
            case 'pray':
                return "#ff8c1a"
                break;
            case 'lunch':
                return "#cccc00"
                break;

            default:
                return colors.light
                break;
        }
    }

    return (
        <View style={styles.container} {...otherProps}>
            <Icon name={icon} color={getStyle()} size={24} style={{ marginBottom: 10 }} />
            <SwitchWithText title={title} px={px} status={status}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // marginRight:5
    },
    text: {
        color: colors.light,
        fontSize: 12,
        textTransform: 'uppercase'
    }
})

export default Activity; 