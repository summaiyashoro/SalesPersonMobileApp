import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

import AppSwitch from '../components/AppSwitch';
import colors from '../config/colors';
 
function SettingSwitch({title}) {
    return (
       <View style={styles.container}>
           <Text style={styles.text}>{title}</Text>
           <AppSwitch/>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
    flexDirection:'row',
    },
    text:{
        fontSize:14,
        flex:1,
        fontWeight:'bold',
        color:colors.dark
    }
})

export default SettingSwitch;