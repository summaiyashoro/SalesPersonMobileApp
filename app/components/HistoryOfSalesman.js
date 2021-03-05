import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function HistoryOfSalesman({date,time,status}) {
    return (
        <View style={{ flex: 1, flexDirection:'row'}}>
            <AppText style={styles.text}>{date}</AppText>
            <AppText style={styles.text}>{time}</AppText>
            <AppText style={[styles.text, {color:colors.lightGreen }]}>{status}</AppText>

            <TouchableOpacity>
            <AppText style={styles.text}>View Map</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 10,   //was 14
        color: colors.medium,
        textAlign:'center',
        padding:12,
        width:90,
        height:40
    }
})
export default HistoryOfSalesman; 