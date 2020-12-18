import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

function Screen({children , ...otherProps}) {
    return (
       <>
        <SafeAreaView style={styles.screen} {...otherProps} >
            {children}
        </SafeAreaView>
       </>
    );
}

const styles = StyleSheet.create({
    screen:{
      flex:1
    }
})

export default Screen;