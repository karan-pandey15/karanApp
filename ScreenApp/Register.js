// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import axios from 'axios';


// export default function Register() {
  
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // const handleFormSubmit = () => {
  //   axios.post(' https://19f8-2401-4900-1c5b-6a4c-1005-40ca-432e-d023.ngrok-free.app/submit', {name, email })
  //     .then((response) => {
  //       console.log(response.data);
  //       // Handle success or navigation to the next screen
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // Handle error
  //     });
  // };

//   return (
//     <View style={styles.container}>
//     <TextInput
//         style={styles.input}
//         placeholder="name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <Button title="Submit" onPress={handleFormSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     width: 200,
//     height: 40,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

import { View, Text, StyleSheet,TextInput } from 'react-native'
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
import axios from 'axios';


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
  const {navigate}  = navigation

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const handleFormSubmit = () => {
  //   axios.post('https://5688-2401-4900-1c5b-6a4c-7051-b9e9-f3ef-420.ngrok-free.app/submit', {name, email })
  //     .then((response) => {
  //       console.log(response.data);
  //       navigate('Home')
  //       // Handle success or navigation to the next screen
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // Handle error
  //     });
  // };

  const handleFormSubmit = () => {
    navigate('Home')
  };
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
          <Text style={styles.subHeaderTitle}>Start With Your Basic Details.</Text>
        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>
          <KeyboardAwareScrollView>
            <Text style={styles.inputHeader}>Full Name</Text>

            <TextInput
                    style={styles.input}
                    placeholder="name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
                  <Text style={styles.inputHeader}>Your Email</Text>
            
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
            <Button
              title="SIGN UP"
              isLoading={isLoading}
              // onPress={() => navigation.navigate('Home')}
              onPress={handleFormSubmit}
            />
          </KeyboardAwareScrollView>
        </Animatable.View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input:{
    
    width: 400, // Set the width of the TextInput
    height: 40,  // Set the height of the TextInput
    borderColor: 'gray',  // Border color
    borderWidth: 1,       // Border width
    borderRadius: 5,     // Border radius (optional)
    paddingHorizontal: 10, // Horizontal padding (optional)
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

export default Register;