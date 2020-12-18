import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../config/colors';

const ModalCircle = ({ onPress, icon, title, ...otherProps }) => {
  return (

    <TouchableOpacity style={styles.content} onPress={onPress} >
      <View style={styles.circle} {...otherProps}>
        <Icon name={icon} size={20} color={colors.white} />
      </View>
      <Text style={styles.modalText}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  modalText: {
    color: colors.black,
    fontSize: 14,
    padding: 4
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: "center"
  },
  content: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ModalCircle;