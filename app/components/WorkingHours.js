import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import AppText from "../components/AppText";
import colors from "../config/colors";

function WorkingHours({ dailyHours, weeklyHours }) {
    return (
        <View style={styles.container}>
            <View style={[styles.innerContainer]}>
                <View style={styles.circle}>
                <AppText style={styles.text} numberOfLines={1}>{dailyHours}</AppText>
                <AppText style={[styles.text, { fontSize: 8, textTransform: 'uppercase', top: 4, left: 1 }]}>hrs</AppText>
                </View>

                <View>
                    <Icon name="calendar-outline" color={colors.dark}  size={20} style={{alignSelf:'center'}}/>
                    <AppText style={styles.text}>Today</AppText>
                </View>
            </View>


            <View style={styles.innerContainer}>
                <View style={styles.circle}>
                <AppText style={styles.text} numberOfLines={1}>{weeklyHours}</AppText>
                <AppText style={[styles.text, { fontSize: 8, textTransform: 'uppercase', top: 4, left: 1 }]}>hrs</AppText>
                </View>

                <View>
                    <Icon name="calendar-outline" color={colors.dark}  size={20} style={{alignSelf:'center'}} />
                    <AppText style={styles.text}>Weekly</AppText>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: -1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        marginHorizontal:10
    },
    innerContainer: {
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor: colors.lighter,
        borderWidth:1,
        borderColor:colors.light,
        marginHorizontal:10,       
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        flexShrink: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginLeft:10,
        marginRight:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.light,
        backgroundColor: colors.white
    },
    text: {
        color: colors.primary,
        fontWeight: '700',
        fontSize: 16,
    }
})

export default WorkingHours;