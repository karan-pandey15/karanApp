// import React, { useState } from "react";
// import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import COLORS from "../../constants/colors";
// // import { Ionicons } from "@expo/vector-icons";
// import Checkbox from "expo-checkbox";
// import Button from "../../components/Button";

// const Addlead = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white ,marginTop:25 }}>
//       <View style={{ flex: 1, marginHorizontal: 22 }}>
//         <View style={{ marginBottom: 12 }}>
//           <Text
//           style={styles.textstyle}
//           >
//             Which Loan You Want To Apply*:
//           </Text>

//           <View
//           style={styles.viewsty}
//           >
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//              style={styles.txtinput}
//             />
//           </View>
//         </View>

//         {/* ... Repeat this block for other input fields ... */}

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Login's Date*:</Text>

//           <View
//           style={styles.viewsty}
//           >
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
//             />
//           </View>
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             marginVertical: 6,
//           }}
//         >
//           <Checkbox
//             style={{ marginRight: 8 }}
//             value={isChecked}
//             onValueChange={setIsChecked}
//             color={isChecked ? COLORS.primary : undefined}
//           />
//           <Text>I agree to the terms and conditions</Text>
//         </View>
//         <Button
//           title="Save"
//           filled
//           style={{
//             marginTop: 18,
//             marginBottom: 4,
//           }}
//         />
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             marginVertical: 22,
//           }}
//         ></View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   textstyle: {
//     fontSize: 16,
//     fontWeight: "400",
//     marginTop: 5,
//     marginVertical: 8,
//   },
//   txtinput:{
//       width: "100%",
//   }
//   ,
//   viewsty:{
//     width: "100%",
//     height: 48,
//     borderColor: COLORS.black,
//     borderWidth: 1,
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingLeft: 22,
//   }
// });

// export default Addlead;

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
// import axios from "axios";

const Addlead = ({navigation}) => {
  // const [isChecked, setIsChecked] = useState(false);
  const { navigate } = navigation;

  const [panName,setPan] = useState('');
  const [Fname,setFname] = useState('');
  const [Mname,setMname] = useState('');
  const [mobile,setMobile] = useState('');
  const [personalEmail,setPersonalEmail] = useState('');
  const [panNo,setPanNo] = useState('');
  const [location,setLocation] = useState('');
  const [companyName,setCompanyName] = useState('');
  const [dob,setDob] = useState('');
  const [relegion,setRelegion] = useState('');
  const [gender,setGender] = useState('');
  
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownOptions = ["Personal Loan-PL", "Business Loan-BL", "Home Loan-HL", "LAP Loan", "Auto Loan-AL","Education Loan",'Over Draft-OD'];

  // const handleFormSubmit = () => {
  //   axios.post('https://d47b-2401-4900-1c5c-1de7-e40c-117c-e72d-b78f.ngrok-free.app/addleaddata', {panName , Fname, Mname, mobile,personalEmail , panNo  , location  ,companyName ,dob,relegion,gender})
  //     .then((response) => {
  //       console.log(response.data);
  //       navigate('Addmoredetails')

  //       // Handle success or navigation to the next screen
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // Handle error
  //     });
  // };
  const handleFormSubmit =()=>{
    navigate('Addmoredetails');
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
 
  const selectOption = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    
    <ScrollView>
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, marginTop: 25 }}
    >
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Which Loan You Want To Apply*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              value={selectedOption}
              editable={false}
            />
            <TouchableOpacity
              style={styles.dropdownIcon}
              onPress={toggleDropdown}
            >
              <Ionicons name="ios-arrow-down" size={20} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ... Repeat this block for other input fields ... */}

        <Modal
          visible={dropdownVisible}
          animationType="slide"
          style={styles.modalStyle}
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={dropdownOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => selectOption(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Customer Name As Per Pan Card*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={panName}
              onChangeText={(text) => setPan(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Father Name*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={Fname}
              onChangeText={(text) => setFname(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Mother Name*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={Mname}
              onChangeText={(text) => setMname(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Mobile No*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={mobile}
              onChangeText={(text) => setMobile(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Personal Email*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={personalEmail}
              onChangeText={(text) => setPersonalEmail(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Pan Card No*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={panNo}
              onChangeText={(text) => setPanNo(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Customer Location*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={location}
              onChangeText={(text) => setLocation(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Company Name*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={companyName}
              onChangeText={(text) => setCompanyName(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>DOB*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={dob}
              onChangeText={(text) => setDob(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Religion*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={relegion}
              onChangeText={(text) => setRelegion(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textstyle}>Gender*:</Text>

          <View style={styles.viewsty}>
            <TextInput
              placeholder=""
              placeholderTextColor={COLORS.black}
              style={styles.txtinput}
              
              value={gender}
              onChangeText={(text) => setGender(text)}
            />
          </View>
        </View>

        <Button
          title="Submit"
          filled
          style={{
            marginTop: 18,
            marginBottom: 80,
          }}
          onPress={handleFormSubmit}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        ></View>
      </View>
      </SafeAreaView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
    marginVertical: 8,
  },
  txtinput: {
    width: "100%",
    color:COLORS.black,
  },
  viewsty: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 22,
    flexDirection: "row",
  },
  dropdownIcon: {
    paddingRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color:"black",
    height:50,
    width:'auto',
    marginTop:60,

  },
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color:"black",
    width:50,
    marginTop:100,
    marginLeft:60,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
  },
});

export default Addlead;
