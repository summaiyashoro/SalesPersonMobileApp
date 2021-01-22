import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import ImageUpload from './ImageUpload';
import LoginButton from '../buttons/LoginButton';
import ErrorMessage from '../components/ErrorMessage';
import colors from '../config/colors';

import MyAppTextInput from '../components/MyAppTextInput';
import Screen from '../screens/Screen';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const validationSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(8).label('Password'),
  fullName: yup.string().required().label('Full Name'),
  phoneNumber: yup.string().required().matches(phoneRegExp, 'Phone number is not valid').label('Phone Number')
})

const AccountSettingsScreen = ({ navigation }) => {

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>

          <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
              <ImageUpload />
            </View>

            <Formik
              initialValues={{ fullName: "", email: "", phoneNumber: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(props) => (
                <>
                  <MyAppTextInput
                    placeholder="Full Name"
                    leftPlaceholderPadding={15}
                    left={14}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={props.handleChange("fullName")}
                    onBlur={() => props.setFieldTouched('fullName')}
                    value={props.values.fullName}
                  />
                  <ErrorMessage error={props.errors.fullName} touch={props.touched.fullName} />


                  <MyAppTextInput
                    placeholder="Email"
                    leftPlaceholderPadding={15}
                    left={14}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onChangeText={props.handleChange("email")}
                    onBlur={() => props.setFieldTouched('email')}
                    value={props.values.email}
                  />
                  <ErrorMessage error={props.errors.email} touch={props.touched.email} />

                  <MyAppTextInput
                    placeholder="Phone Number"
                    leftPlaceholderPadding={15}
                    left={14}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={props.handleChange("phoneNumber")}
                    onBlur={() => props.setFieldTouched('phoneNumber')}
                    value={props.values.phoneNumber}
                  />
                  <ErrorMessage error={props.errors.phoneNumber} touch={props.touched.phoneNumber} />

                  <MyAppTextInput
                    placeholder="Password"
                    leftPlaceholderPadding={15}
                    left={14}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={props.handleChange("password")}
                    onBlur={() => props.setFieldTouched('password')}
                    value={props.values.password}
                  />
                  <ErrorMessage error={props.errors.password} touch={props.touched.password} />

                  <LoginButton title="Save" />
                </>
              )}

            </Formik>
          </KeyboardAvoidingView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,

  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
})

export default AccountSettingsScreen;