import React from 'react';
import { View, Text, ScrollView, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import Separator from "../components/Separator";
import HistoryOfSalesman from "../components/HistoryOfSalesman";
import WorkingHours from "../components/WorkingHours";
import Activity from './Activity';
import colors from "../config/colors";

function HomeScreen(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <AppText style={styles.headingText} >ACTIVITY</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />
                <View style={styles.activityContainer}>
                    <Activity icon="ellipse-outline" title="Active" px={1.7} status="active"/>
                    <Activity icon="walk" title="Prayer" px={1.7}  status="pray"/>
                    <Activity icon="restaurant" title="Lunch" px={1.6}  status="lunch"/>
                    <Activity icon="cloud-offline" title="Inactive" px={4.5} status="inactive" />
                </View>

                <AppText style={styles.headingText} >WORKING HOURS</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />
                <WorkingHours dailyHours={5} weeklyHours={35} />


                <AppText style={styles.headingText} >HISTORY</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />
                <View style={styles.historyContainer}>
                    <View style={{flex:1,flexDirection: 'row' }}>
                        <AppText style={styles.text}>Date</AppText>
                        <AppText style={styles.text}>Time</AppText>
                        <AppText style={styles.text}>Status</AppText>
                        <AppText style={styles.text}>Location</AppText>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginHorizontal:5 }}>
                        <HistoryOfSalesman date="27th jan 2020" time="10:00 AM" status="Active" />
                        <HistoryOfSalesman date="7th jan 2020" time="10:00 AM" status="Active" />
                        <HistoryOfSalesman date="7th jan 2020" time="10:00 AM" status="Active" />
                        <HistoryOfSalesman date="7th jan 2020" time="10:00 AM" status="Active" />
                    </View>

                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    historyContainer: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lighter,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
    },
    activityContainer: {
        flex: 1,
        flexShrink: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: colors.light,
        marginVertical: 20,
        paddingVertical: 26,
        paddingHorizontal: 10,
        backgroundColor: colors.lighter,
        borderRadius: 25
    },
    headingText: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        color: colors.primary,
        backgroundColor: colors.softGrey,
        fontWeight: '700',
        fontSize: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 12,
        paddingHorizontal: 10,
        flex: 1,
        flexShrink: 1,
        paddingVertical: 13
    }

})

export default HomeScreen;