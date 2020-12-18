import React, { useState } from 'react';
import {
   Text, 
   View, 
   StyleSheet, 
   KeyboardAvoidingView, 
   TouchableWithoutFeedback, 
   Keyboard 
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import * as yup from 'yup';

import MyAppTextInput from './MyAppTextInput';
import ForgetPasswordButton from './ForgetPasswordButton';
import LoginButton from '../buttons/LoginButton';
import ErrorMessage from '../components/ErrorMessage';
import AppButton from '../buttons/AppButton';
import colors from '../config/colors';


const validationSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(8).max(20).label('Password')
})

const SignInScreen = ({ navigation }) => {
  const [passwordIcon, setPasswordIcon] = useState("eye-off");
 
 function handleSubmit  (values){
    if(values.email.length > 0 && values.password.length > 0 ){
      navigation.replace('logedIn')
    }
  }
  

  return (
    <LinearGradient
      colors={['#02072F', '#091361']}
      start={{ x: 0.5, y: 0.9 }}
      end={{ x: 1, y: 0.2 }}
      style={{ flex: 1 }}
    >

      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Moving Trail Solutions</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.footer}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(props) => (
              <>
                <MyAppTextInput
                  placeholder="Email"
                  iconLeft="mail"
                  leftPlaceholderPadding={30}
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
                  placeholder="Password"
                  iconLeft="lock-closed"
                  leftPlaceholderPadding={30}
                  onPress={() => { passwordIcon === "eye-off" ? setPasswordIcon("eye") : setPasswordIcon("eye-off") }}
                  iconRight={passwordIcon}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  secureTextEntry={passwordIcon === "eye-off" ? true : false}
                  onChangeText={props.handleChange("password")}
                  onBlur={() => props.setFieldTouched('password')}
                  value={props.values.password}
                />
                <ErrorMessage error={props.errors.password} touch={props.touched.password} />

                <LoginButton title="Login" />
                
                <ForgetPasswordButton
                  title="Forgot Password"
                  onPress={() => navigation.navigate('ForgotPassword')}
                />
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  headerText: {
    color: colors.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default SignInScreen;