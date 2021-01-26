import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


import colors from '../config/colors';
import { useFormikContext } from 'formik';
import AppText from "../components/AppText";

function SaveButton({ title, onPress }) {
  const { handleSubmit } = useFormikContext();

  return (
    <TouchableOpacity onPress={handleSubmit} style={styles.container}>
      <AppText style={styles.text}>{title}</AppText>
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
    backgroundColor: colors.secondary
  },

  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }

})

export default SaveButton;