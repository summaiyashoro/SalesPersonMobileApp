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

import ErrorMessage from '../components/ErrorMessage';
import SaveButton from '../buttons/SaveButton';
import LoginButton from '../buttons/LoginButton';
import colors from '../config/colors';

import MyAppTextInput from '../components/MyAppTextInput';

const validationSchema = yup.object({
    password: yup.string().required().min(8).max(20).label('Password'),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Password must match!').label('Password')
})

const ForgetPasswordScreen = ({navigation}) =>{
    const [newPasswordIcon, setNewPasswordIcon] = useState("eye-off");
    const [confirmPasswordIcon, setConfirmPasswordIcon] = useState("eye-off");

    function handleSubmit  (values){
        if(values.password.length > 0 && values.confirmPassword.length > 0 ){
          navigation.navigate('Login');
        }
      }

    return (
        <LinearGradient
            colors={['#02072F', '#091361']}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 1, y: 0.2 }}
            style={{ flex: 1 }}
        >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >

                <KeyboardAvoidingView style={styles.footer}>
                    <Text style={styles.text} >Create new password</Text>
                    <Formik
                        initialValues={{ password: "", confirmPassword: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSubmit(values);
                        }}
                    >
                        {(props) => (
                            <>
                                <MyAppTextInput
                                    placeholder="Password"
                                    onPress={() => { newPasswordIcon === "eye-off" ? setNewPasswordIcon("eye") : setNewPasswordIcon("eye-off") }}
                                    iconRight={newPasswordIcon}
                                    leftPlaceholderPadding={15}
                                    left={14}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="password"
                                    secureTextEntry={newPasswordIcon === "eye-off" ? true : false}
                                    onChangeText={props.handleChange("password")}
                                    onBlur={()=> props.setFieldTouched('password')}
                                    value={props.values.password}
                                />
                            <ErrorMessage error={props.errors.password} touch={props.touched.password}/>


                                <MyAppTextInput
                                    placeholder="Confirm Password"
                                    onPress={() => { confirmPasswordIcon === "eye-off" ? setConfirmPasswordIcon("eye") : setConfirmPasswordIcon("eye-off") }}
                                    iconRight={confirmPasswordIcon}
                                    leftPlaceholderPadding={15}
                                    left={14}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="password"
                                    secureTextEntry={confirmPasswordIcon === "eye-off" ? true : false}
                                    onChangeText={props.handleChange("confirmPassword")}
                                    onBlur={()=> props.setFieldTouched('confirmPassword')}
                                    value={props.values.confirmPassword}
                                />
                          <ErrorMessage error={props.errors.confirmPassword} touch={props.touched.confirmPassword} />

                                <View style={styles.buttonContainer}>
                                <LoginButton title="Save Password"/>
                                </View>

                            </>
                        )}
                    </Formik>
                </KeyboardAvoidingView>

            </TouchableWithoutFeedback>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
     buttonContainer:{
      top:80
     },
     headerText: {
         color:colors.white,
         fontSize: 40,
         fontWeight: 'bold',
         textAlign: 'center',
     },
    footer: {
        flex: 1,
        backgroundColor:colors.white,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 40,
        paddingBottom: 10,
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        paddingBottom: 15,
        fontWeight: 'bold'
    },
})

export default ForgetPasswordScreen;









