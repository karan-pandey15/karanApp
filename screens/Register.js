import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useReducer, useEffect, useCallback } from 'react'
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
const Register = ({ navigation }) => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [formState, dispatchFormState] = useReducer(reducer, initialState)

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue)
      dispatchFormState({ inputId, validationResult: result, inputValue })
    },
    [dispatchFormState]
  )

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
          <Text style={styles.headerTitle}>Register</Text>
          <Text style={styles.subHeaderTitle}>Please register to create a new account.</Text>
        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>
          <KeyboardAwareScrollView>
            <Text style={styles.inputHeader}>Full Name</Text>
            <Input
              id="fullName"
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['fullName']}
              placeholder="Karan Pandey"
              placeholderTextColor={COLORS.black}
            />
            <Text style={styles.inputHeader}>Email</Text>
            <Input
              id="email"
              placeholder="pandeykaran1515@gmail.com"
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['email']}
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
            />
            <Text style={styles.inputHeader}>Password</Text>
            
            <Button
              title="SIGN UP"
              isLoading={isLoading}
              onPress={() => navigation.navigate('Login')}
            />
          </KeyboardAwareScrollView>
        </Animatable.View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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

export default Register;