import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../config/colors';

function AppButton({ title, onPress, ...otherProps }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#030b49', '#040f62', '#002699']}
        start={{ x: 0.4, y: 0.5 }}
        end={{ x: 0.8, y: 0.4 }}
        style={styles.container}
        {...otherProps}
      >
        <Text style={styles.text} >{title}</Text>

      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
    borderRadius: 10,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }

})

export default AppButton;