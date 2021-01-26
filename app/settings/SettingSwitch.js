import React from 'react';
import { View, StyleSheet} from 'react-native';

import AppSwitch from '../components/AppSwitch';
import AppText from "../components/AppText";
import colors from '../config/colors';
 
function SettingSwitch({title}) {
    return (
       <View style={styles.container}>
           <AppText style={styles.text}>{title}</AppText>
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