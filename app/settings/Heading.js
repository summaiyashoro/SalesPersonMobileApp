import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from "../components/AppText";

function Heading({heading}) {
    return (
        <View>
            <AppText style={styles.text}>{heading}</AppText>
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        textTransform:'uppercase',
        color:"#6e6969",
        fontSize:14,
        paddingVertical:15,
        fontWeight:'bold'
    }
})

export default Heading;