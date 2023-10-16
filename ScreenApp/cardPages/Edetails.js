import { View, Text, StyleSheet } from "react-native";
import React, { useState, useReducer, useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import { FONTS, COLORS, SIZES } from "../../constants";
import Input from "../../components/Input";
import { validateInput } from "../../utils/actions/formActions";
import DatePicker from 'react-native-datepicker';


// import { reducer } from '../utils/reducers/formReducers'
import { reducer } from "../../utils/reducers/formReducers";
import Button from "../../components/Button";
import GenderButton from "./GenderButton";

const isTestMode = false;

const initialState = {
  inputValues: {
    fullName: isTestMode ? "Karan Pandey" : "",
    email: isTestMode ? "example@gmail.com" : "",
    password: isTestMode ? "**********" : "",
    confirmPassword: isTestMode ? "**********" : "",
  },
  inputValidities: {
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
    aadharCard: false, // Add Aadhar Card validity field
    panCard: false, // Add PAN Card validity field
  },
  formIsValid: false,
};
const Edetails = ({ navigation }) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const selectGender = (gender) => {
    inputChangedHandler("gender", gender);
  };

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error);
    }
  }, [error]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(230, 81, 0, 1)", "rgba(230, 81, 0, .8)"]}
        style={{ flex: 1 }}
      >
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Employee Register</Text>
          <Text style={styles.subHeaderTitle}>Give Your Basic Details.</Text>
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <KeyboardAwareScrollView>
          

          {/* Add Aadhar Card input */}
<Text style={styles.inputHeader}>Aadhar Card</Text>
<View style={styles.inputContainer}>
  <Input
    id="aadharCard"
    onInputChanged={inputChangedHandler}
    errorText={formState.inputValidities["aadharCard"]}
    placeholder="Aadhar Card Number"
    placeholderTextColor={COLORS.black}
  />
</View>

{/* Add PAN Card input */}
<Text style={styles.inputHeader}>PAN Card</Text>
<View style={styles.inputContainer}>
  <Input
    id="panCard"
    onInputChanged={inputChangedHandler}
    errorText={formState.inputValidities["panCard"]}
    placeholder="PAN Card Number"
    placeholderTextColor={COLORS.black}
  />
</View>




            


<Text style={styles.inputHeader}>Date of Birth</Text>
<DatePicker
  style={styles.datePicker}
  date={formState.inputValues.dob} // You can use this as the initial date
  mode="date" // Set the mode to "date" for date selection
  placeholder="Select Date"
  format="D/MM/YYYY" // Define the desired date format
  minDate="01/01/1900" // Set the minimum date (adjust it as needed)
  maxDate="01/01/2100" // Set the maximum date (adjust it as needed)
  confirmBtnText="Confirm"
  cancelBtnText="Cancel"
  customStyles={{
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 0,
    },
    dateInput: {
      marginLeft: 36,
      borderRadius: 10,
    },
  }}
  onDateChange={(date) => {
    inputChangedHandler('dob', date);
  }}
/>

            {/* Add Gender checkboxes */}
            <Text style={styles.inputHeader}>Gender</Text>
            <View style={styles.genderContainer}>
              <GenderButton
                gender="Male"
                isSelected={formState.inputValues.gender === "Male"}
                onPress={selectGender}
              />
              <GenderButton
                gender="Female"
                isSelected={formState.inputValues.gender === "Female"}
                onPress={selectGender}
              />
            </View>

            <Button
              title="Submit"
              isLoading={isLoading}
              onPress={() => navigation.navigate("Menu")}
            />
          </KeyboardAwareScrollView>
        </Animatable.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "rgb(3,110,140)",
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  subHeaderTitle: {
    ...FONTS.body4,
    color: COLORS.white,
    marginVertical: SIZES.padding,
    textAlign: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    paddingHorizontal: 22,
  },
  inputHeader: {
    textTransform: "uppercase",
    ...FONTS.body4,
    marginVertical: 4,
  },
  genderButton: {
    width: 100,
    height: 40,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10, // Add border radius for a rounded appearance
  },
  selectedGenderButton: {
    backgroundColor: COLORS.primary,
  },
  genderText: {
    ...FONTS.body4,
    color: COLORS.black,
  },
  selectedGenderText: {
    color: COLORS.white,
  },
  inputContainer: {
    flexDirection: 'row', // Place input fields on the same line
    alignItems: 'center',
    marginBottom: 16,
  }
  
  // Style for each input field
  
  
});

export default Edetails;
