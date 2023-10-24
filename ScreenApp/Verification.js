import { View, Text, StyleSheet,Alert ,Image} from 'react-native'
import React, { useState ,useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import { FONTS, COLORS, SIZES } from '../constants'
import Button from "../components/Button"
import OTPTextInput from 'react-native-otp-textinput'
import { firebaseConfig } from './config'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';


const Verification = ({ navigation }) => {

  const { navigate } = navigation;

const [phoneNumber,setPhoneNumber] = useState('');
    const [code,setCode] = useState('');
    const [verificationId,setVerifiactionId] = useState(null);
    const recapthaVerifier = useRef(null);

    const sendVerification= ()=>{
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(phoneNumber,recapthaVerifier.current).then(setVerifiactionId);
        setPhoneNumber('');
    }
    const confirmCode = ()=>{
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,code
        );
        firebase.auth().signInWithCredential(credential).then(()=>{
            setCode('');
        }).catch((err)=>{
            alert(err);
        })
        // Alert.alert(
        //     'login successfully, welcome to the App'
        // );
        navigate("Register")
    }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(230, 81, 0, 1)", "rgba(230, 81, 0, .8)"]}
        style={{ flex: 1 }}>
        <StatusBar hidden />
        <FirebaseRecaptchaVerifierModal  
        ref={recapthaVerifier}
        firebaseConfig={firebaseConfig}
     />
       
        <View style={styles.header}>
        <Image
     source={require('../assets/icons/user-removebg-preview.png')} // Use the path to your image
     style={{ width: 80, height: 80, marginTop:20,marginBottom:20}} // Set the desired width and height
   />
          <Text style={styles.headerTitle}>Verification</Text>
          <Text style={styles.subHeaderTitle}>Please verify your OTP code.</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>
          <KeyboardAwareScrollView>
            <Text style={styles.inputHeader}>Code</Text>
            <OTPTextInput
              textInputStyle={styles.OTPStyle}
              inputCount={6}
              // onChangeText={setCode}
              tintColor={COLORS.primary}
            />

            <Button
              title="Get Started"
              // isLoading={isLoading}
              // onPress={() => navigation.navigate('Register')}
              onPress={confirmCode}
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
    paddingBottom: 40,
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
  },
  OTPStyle: {
    backgroundColor: COLORS.gray,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    width: 45,
    borderBottomWidth: 1,
  },
})
export default Verification