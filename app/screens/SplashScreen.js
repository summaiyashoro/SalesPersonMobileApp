import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


function SplashScreen({navigation}) {
   setTimeout(() => {
     navigation.navigate('Login');
   },2000);

    return (
        <LinearGradient style={styles.gradient}
        colors={['#02072F', '#091361']} 
        start={{ x: 0.5, y:0.9}} 
        end={{ x: 1, y: 0.2 }}
        >
       <View style={styles.headerContainer}>
         <Text style={styles.headerText}>Moving Trail Solutions </Text>
         </View>
         <View style={styles.footerContainer}>
         <Text style={styles.footerText}>www.movingtrailsolution.com</Text>
       </View>
       </LinearGradient> 
    );
}


const styles = StyleSheet.create({
    footerText: {
      color:"#fff",
      fontSize: 16,
      textAlign:'center'
    },
    gradient:{
      flex:1, 
      justifyContent:'flex-end',
      alignItems: 'center',
    },
    headerText: {
      color: "#fff",
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center', 
    },
    headerContainer:{
      padding:20,
      position:'absolute',
      top:200
     },
     footerContainer:{
      position:'absolute', 
      bottom:80
     }
  })
export default SplashScreen;