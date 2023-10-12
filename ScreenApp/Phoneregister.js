import { View, Text, StyleSheet,TextInput } from 'react-native'
import React, { useState, useReducer, useEffect, useCallback,useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import { FONTS, COLORS, SIZES } from '../constants'
import Input from '../components/Input'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import Button from "../components/Button"
import { firebaseConfig } from './config'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';


const isTestMode = false;
                             
const initialState = {
  inputValues: {
    fullName: isTestMode ? 'Karan Pandey' : '',
    email: isTestMode ? 'example@gmail.com' : '',
    password: isTestMode ? '**********' : '',
    confirmPassword: isTestMode ? '**********' : ''
  },
  inputValidities: {
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false
  },
  formIsValid: false,
}
const Phoneregister = ({ navigation }) => {

  const { navigate } = navigation;
  const [error, setError] = useState()
  // const [isLoading, setIsLoading] = useState(false)
  // const [formState, dispatchFormState] = useReducer(reducer, initialState)


  // Semd Otp code 
  
  
  const [phoneNumber,setPhoneNumber] = useState('');
  const [code,setCode] = useState('');
  const [verificationId,setVerifiactionId] = useState(null);
  const recapthaVerifier = useRef(null);

  const sendVerification= ()=>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(phoneNumber,recapthaVerifier.current).then(setVerifiactionId);
    setPhoneNumber('');
    // navigate("Verification")
}


  // const inputChangedHandler = useCallback(
  //   (inputId, inputValue) => {
  //     const result = validateInput(inputId, inputValue)
  //     dispatchFormState({ inputId, validationResult: result, inputValue })
  //   },
  //   [dispatchFormState]
  // )

  useEffect(() => {
    if (error) {
      Alert.alert('An error occured', error)
    }
  }, [error])

  return (
           
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(230, 81, 0, 1)", "rgba(230, 81, 0, .8)"]}
        style={{ flex: 1 }}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Phone</Text>
          <Text style={styles.subHeaderTitle}>Get Started With Phone.</Text>
        </View>

        <FirebaseRecaptchaVerifierModal  
        ref={recapthaVerifier}
        firebaseConfig={firebaseConfig}
     />

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>
          <KeyboardAwareScrollView>
            <Text style={styles.inputHeader}>Phone Number</Text>
            
          

            <TextInput 
            placeholder='Phone number' 
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
            autoCompleteType='tel'
            style={styles.TextInput}
           />
           
            <Button
              title="Get Otp"
              // isLoading={isLoading}
              // onPress={() => navigation.navigate('Verification')}
              onPress={sendVerification}
            />
            <Button
            title="enter otp"
            // isLoading={isLoading}
            onPress={() => navigation.navigate('Verification')}
          />
          </KeyboardAwareScrollView>
        </Animatable.View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  TextInput:{
     marginTop:20,
     marginBottom:30
  }, 
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 4,
    backgroundColor:'rgb(3,110,140)'
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.white
  },
  subHeaderTitle: {
    ...FONTS.body4,
    color: COLORS.white,
    marginVertical: SIZES.padding,
    textAlign: 'center'
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    paddingHorizontal: 22,
    paddingVertical: 30
  },
  inputHeader: {
    textTransform: 'uppercase',
    ...FONTS.body4,
    marginVertical: 4
  }
})

export default Phoneregister;