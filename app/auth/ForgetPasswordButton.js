import React from 'react';
import {
    Text , 
    TouchableOpacity , 
    StyleSheet
} from 'react-native';

const ForgetPasswordButton = ({title, onPress, ...otherProps}) => {
    return (
        <TouchableOpacity style={{marginVertical:5}} onPress={onPress}>
         <Text style={styles.text} {...otherProps} >{title}</Text>         
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