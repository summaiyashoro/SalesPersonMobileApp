import React from 'react';
import { View,Text, Image, StyleSheet, ScrollView } from 'react-native';

import defaultProfile from "../components/defaultProfile";
import colors from '../config/colors';

function NotificationsDetailsScreen({route}) {
const param = route.params;

    return (
        <ScrollView>
       <View style={styles.container}>
          <Image source={{uri: param.profileImage ? param.profileImage : defaultProfile.defaultProfileUri}}  style={styles.image}/>

          <View style={styles.container}>
           <Text style={styles.title}>{param.title}</Text>
           <Text style={styles.subtitle}>{param.subTitle}</Text>
          </View>
       </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginVertical:30,
        marginHorizontal:9
    },
    image:{
        width:120, 
        height:120,
        borderRadius:60
    },
    title:{
      fontSize:30,
      color:colors.black,
      textAlign:'center'
    },
    subtitle:{
        fontSize:16,
        color:colors.dark, 
        textAlign:'left'
    }
})

export default NotificationsDetailsScreen;   