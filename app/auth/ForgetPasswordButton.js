import React from 'react';
import {
    TouchableOpacity , 
    StyleSheet
} from 'react-native';

import AppText from "../components/AppText";

const ForgetPasswordButton = ({title, onPress, ...otherProps}) => {
    return (
        <TouchableOpacity style={{marginVertical:5}} onPress={onPress}>
         <AppText style={styles.text} {...otherProps} >{title}</AppText>         
        </TouchableOpacity>  
    );
}

const styles = StyleSheet.create({
    text:{
        textDecorationLine:'underline',
        textAlign:"center", 
        fontSize:14
    }
})
export default ForgetPasswordButton;