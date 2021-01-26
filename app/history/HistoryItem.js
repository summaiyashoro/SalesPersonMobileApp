import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../config/colors';
import AppText from "../components/AppText";

function HistoryItem({timeofArrival,hoursWorked,startTime, status, extraHours }) {
    return (
        <>
        <View style={styles.container}>
       { timeofArrival && <MaterialCommunityIcons name="map-marker" size={40} color={hoursWorked >=8.00 ? colors.greenLight : colors.danger} />}
           <View style={styles.content}>

                <View style={styles.header}>
                    <AppText style={styles.arrivalTime} numberOfLines={1} >{timeofArrival}</AppText>
                    <AppText style={styles.hoursworked} numberOfLines={1} >{hoursWorked} hrs</AppText>
                </View>

                <View style={styles.header}>
                { startTime && <MaterialCommunityIcons name="clock-outline" size={12} color={colors.dark} />}
                    
                    <AppText style={styles.startedFrom} numberOfLines={1} >{startTime}</AppText>
                   {status && <View style={styles.separator}></View>}
                    <AppText style={styles.status} numberOfLines={1} >{status}</AppText>

                    { extraHours && <MaterialCommunityIcons name={hoursWorked >=8.00 ? "menu-up" : "menu-down"} size={20} color={hoursWorked>=8.00 ? colors.greenLight : colors.danger} />}
                    <AppText style={[styles.extraHours,{color:hoursWorked>=8.00 ? colors.greenLight : colors.danger}]} numberOfLines={1}>{extraHours}hrs</AppText>
                </View>
           </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        padding:5,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'row',
        width:'100%',
    },
    content:{
        marginHorizontal:10,
        flexShrink:1
    },
    header: {
        flexDirection: 'row',
        alignItems:'center',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22, 
    },
    subtitle:{
        color:colors.dark, 
        paddingRight:2,
    },
    arrivalTime: {
        fontSize: 16,
        fontWeight: 'bold',
        flexShrink:1,
        width:'100%',
    }, 
    hoursworked:{
        paddingRight:2,
        fontSize:16,
        fontWeight:'bold'
    },
    startedFrom: {
        fontSize: 10,
        fontWeight: 'bold',
        color:colors.dark,
        paddingLeft:2,
    }, 
    extraHours:{
        paddingRight:2,
        fontSize:10,
        color:colors.dark
    },
    separator:{
        width:0.8,
        height:10,
        backgroundColor:colors.light,
        marginHorizontal:10
    },
    status:{
        fontSize: 10,
        fontWeight: 'bold',
        flexShrink:1,
        width:'100%',
        color:colors.dark
    }
    
})


export default HistoryItem;