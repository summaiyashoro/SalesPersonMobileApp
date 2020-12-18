import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


function HomeScreen(props) {
    return (
        <View>
            <Text style={styles.text}>Home Screen</Text>
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