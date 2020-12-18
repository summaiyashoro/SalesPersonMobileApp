import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import defaultProfile from "../components/defaultProfile";

// const defaultProfile = require('../assets/defaultProfile.png');
// const defaultProfileUri = Image.resolveAssetSource(defaultProfile).uri;

function AccountSettingHeader({title,imageSource, onPress }) {

    return (
        <>
     <View style={styles.container}>
            <View style={styles.image}>
                <Image source={{uri:imageSource ? imageSource : defaultProfile.defaultProfileUri}} style={styles.image} />
            </View>
            <Text style={styles.text}>{title}</Text>

            <TouchableOpacity onPress={onPress}>
            <MaterialCommunityIcons name="circle-edit-outline" size={35} color="#1e90ff"  style={styles.icon}/>
            </TouchableOpacity>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        flex:-1,
        marginVertical:10,
    },
    image:{ 
        width:50,
        height:50,
        borderRadius:25,
    },
    text:{
        fontSize:18,
        paddingLeft:8,
        fontWeight:'bold',
        flex:1,
        color:colors.dark

    },
    icon:{
        paddingLeft:25
    }
})

export default AccountSettingHeader;