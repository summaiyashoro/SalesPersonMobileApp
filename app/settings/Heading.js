import React from 'react';
import { Text, StyleSheet} from 'react-native';


function Heading({heading}) {
    return (
         <Text style={styles.text}>{heading}</Text>
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