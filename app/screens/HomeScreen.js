import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from "../components/AppText";

function HomeScreen(props) {
    return (
        <View>
            <AppText style={styles.text}>Home Screen</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
})

export default HomeScreen;