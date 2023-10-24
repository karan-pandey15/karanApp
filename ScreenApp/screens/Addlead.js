// // import React, { useState } from "react";
// // import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import COLORS from "../../constants/colors";
// // // import { Ionicons } from "@expo/vector-icons";
// // import Checkbox from "expo-checkbox";
// // import Button from "../../components/Button";

// // const Addlead = () => {
// //   const [isChecked, setIsChecked] = useState(false);
// //   return (
// //     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white ,marginTop:25 }}>
// //       <View style={{ flex: 1, marginHorizontal: 22 }}>
// //         <View style={{ marginBottom: 12 }}>
// //           <Text
// //           style={styles.textstyle}
// //           >
// //             Which Loan You Want To Apply*:
// //           </Text>

// //           <View
// //           style={styles.viewsty}
// //           >
// //             <TextInput
// //               placeholder=""
// //               placeholderTextColor={COLORS.black}
// //              style={styles.txtinput}
// //             />
// //           </View>
// //         </View>

// //         {/* ... Repeat this block for other input fields ... */}

// //         <View style={{ marginBottom: 12 }}>
// //           <Text style={styles.textstyle}>Login's Date*:</Text>

// //           <View
// //           style={styles.viewsty}
// //           >
// //             <TextInput
// //               placeholder=""
// //               placeholderTextColor={COLORS.black}
// //               style={styles.txtinput}
// //             />
// //           </View>
// //         </View>

// //         <View
// //           style={{
// //             flexDirection: "row",
// //             marginVertical: 6,
// //           }}
// //         >
// //           <Checkbox
// //             style={{ marginRight: 8 }}
// //             value={isChecked}
// //             onValueChange={setIsChecked}
// //             color={isChecked ? COLORS.primary : undefined}
// //           />
// //           <Text>I agree to the terms and conditions</Text>
// //         </View>
// //         <Button
// //           title="Save"
// //           filled
// //           style={{
// //             marginTop: 18,
// //             marginBottom: 4,
// //           }}
// //         />
// //         <View
// //           style={{
// //             flexDirection: "row",
// //             justifyContent: "center",
// //             marginVertical: 22,
// //           }}
// //         ></View>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   textstyle: {
// //     fontSize: 16,
// //     fontWeight: "400",
// //     marginTop: 5,
// //     marginVertical: 8,
// //   },
// //   txtinput:{
// //       width: "100%",
// //   }
// //   ,
// //   viewsty:{
// //     width: "100%",
// //     height: 48,
// //     borderColor: COLORS.black,
// //     borderWidth: 1,
// //     borderRadius: 8,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     paddingLeft: 22,
// //   }
// // });

// // export default Addlead;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   StyleSheet,
//   Modal,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import COLORS from "../../constants/colors";
// import { Ionicons } from "@expo/vector-icons";
// import Button from "../../components/Button";
// // import axios from "axios";

// const Addlead = ({navigation}) => {
//   // const [isChecked, setIsChecked] = useState(false);
//   const { navigate } = navigation;

//   const [panName,setPan] = useState('');
//   const [Fname,setFname] = useState('');
//   const [Mname,setMname] = useState('');
//   const [mobile,setMobile] = useState('');
//   const [personalEmail,setPersonalEmail] = useState('');
//   const [panNo,setPanNo] = useState('');
//   const [location,setLocation] = useState('');
//   const [companyName,setCompanyName] = useState('');
//   const [dob,setDob] = useState('');
//   const [relegion,setRelegion] = useState('');
//   const [gender,setGender] = useState('');
  
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const dropdownOptions = ["Personal Loan-PL", "Business Loan-BL", "Home Loan-HL", "LAP Loan", "Auto Loan-AL","Education Loan",'Over Draft-OD'];

//   // const handleFormSubmit = () => {
//   //   axios.post('https://d47b-2401-4900-1c5c-1de7-e40c-117c-e72d-b78f.ngrok-free.app/addleaddata', {panName , Fname, Mname, mobile,personalEmail , panNo  , location  ,companyName ,dob,relegion,gender})
//   //     .then((response) => {
//   //       console.log(response.data);
//   //       navigate('Addmoredetails')

//   //       // Handle success or navigation to the next screen
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //       // Handle error
//   //     });
//   // };
//   const handleFormSubmit =()=>{
//     navigate('Addmoredetails');
//   }

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };
 
//   const selectOption = (option) => {
//     setSelectedOption(option);
//     toggleDropdown();
//   };

//   return (
    
//     <ScrollView>
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: COLORS.white, marginTop: 25 }}
//     >
//       <View style={{ flex: 1, marginHorizontal: 22 }}>
//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Which Loan You Want To Apply*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
//               value={selectedOption}
//               editable={false}
//             />
//             <TouchableOpacity
//               style={styles.dropdownIcon}
//               onPress={toggleDropdown}
//             >
//               <Ionicons name="ios-arrow-down" size={20} color={COLORS.black} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* ... Repeat this block for other input fields ... */}

//         <Modal
//           visible={dropdownVisible}
//           animationType="slide"
//           style={styles.modalStyle}
//           transparent={true}
//         >
//           <View style={styles.modalContainer}>
//             <FlatList
//               data={dropdownOptions}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.option}
//                   onPress={() => selectOption(item)}
//                 >
//                   <Text>{item}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//           </View>
//         </Modal>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Customer Name As Per Pan Card*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={panName}
//               onChangeText={(text) => setPan(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Father Name*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={Fname}
//               onChangeText={(text) => setFname(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Mother Name*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={Mname}
//               onChangeText={(text) => setMname(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Mobile No*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={mobile}
//               onChangeText={(text) => setMobile(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Personal Email*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={personalEmail}
//               onChangeText={(text) => setPersonalEmail(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Pan Card No*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={panNo}
//               onChangeText={(text) => setPanNo(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Customer Location*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={location}
//               onChangeText={(text) => setLocation(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Company Name*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={companyName}
//               onChangeText={(text) => setCompanyName(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>DOB*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={dob}
//               onChangeText={(text) => setDob(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Religion*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={relegion}
//               onChangeText={(text) => setRelegion(text)}
//             />
//           </View>
//         </View>

//         <View style={{ marginBottom: 12 }}>
//           <Text style={styles.textstyle}>Gender*:</Text>

//           <View style={styles.viewsty}>
//             <TextInput
//               placeholder=""
//               placeholderTextColor={COLORS.black}
//               style={styles.txtinput}
              
//               value={gender}
//               onChangeText={(text) => setGender(text)}
//             />
//           </View>
//         </View>

//         <Button
//           title="Submit"
//           filled
//           style={{
//             marginTop: 18,
//             marginBottom: 80,
//             padding:20
//           }}
//           onPress={handleFormSubmit}
//         />
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             marginVertical: 22,
//           }}
//         ></View>
//       </View>
//       </SafeAreaView>
//       </ScrollView>
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
//   txtinput: {
//     width: "100%",
//     color:COLORS.black,
//   },
//   viewsty: {
//     width: "100%",
//     height: 48,
//     borderColor: COLORS.black,
//     borderWidth: 1,
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingLeft: 22,
//     flexDirection: "row",
//   },
//   dropdownIcon: {
//     paddingRight: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//     color:"black",
//     height:50,
//     width:'auto',
//     marginTop:60,

//   },
//   modalStyle: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     color:"black",
//     width:50,
//     marginTop:100,
//     marginLeft:60,
//   },
//   option: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: COLORS.black,
//   },
// });

// export default Addlead;


import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import COLORS from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
export default function FormComponent({ navigation }) {
  const { navigate } = navigation;

  
const fieldsPerPage = 10;
  // const navigation = useNavigation();

  const allFields = [
    'Product_Loan', 'Bank_Name', 'Customer_Name', 'Father_Name', 'Mother_Name',
    'Mobile', 'Personal_Email', 'Pan_Card', 'Customer_Location', 'Company_Name',
    'Dob', 'Login_Date', 'Gender', 'Religion', 'Income_Source', 'Marital_Status',
    'Spouse_Name', 'Qualification', 'Property_Status', 'Aadhar_Card_No',
    'Current_Address_Line1', 'Current_Address_Line2', 'Current_City', 'Current_Landmark',
    'Current_State', 'Current_Pin', 'Permanent_Address_Line1', 'Permanent_Address_Line2',
    'Permanent_City', 'Permanent_Landmark', 'Permanent_State', 'Permanent_Pin',
    'Designation', 'Current_Company_Work_Experience', 'Total_Work_Experience', 'Company_Type',
    'Official_Mail', 'Company_Address', 'Company_City', 'Company_State', 'Company_Pin',
    'Salary_Account_BankName', 'Annual_Ctc', 'Net_Salary', 'Obligations', 'Scheme_Offered',
    'Loan_Amount_Applied', 'Tenure_Of_Loan', 'Credit_Card_Obligation', 'Reference1_FullName_Relative',
    'Reference1_MobileNo', 'Reference1_Address1', 'Reference1_City', 'Reference1_State', 'Reference1_Pin',
    'Reference2_FullName_Friend', 'Reference2_MobileNo', 'Reference2_Address1', 'Reference2_City',
    'Reference2_State', 'Reference2_Pin', 'Caller_Name', 'TL_Name', 'Manager_Name', 'Disbursal_BankName',
    'Loan_Application_No', 'Approved_Amount', 'Disbursal_Loan_Amount', 'Inhand_Disb_Account',
    'Bt_Disb_Amount', 'Top_Up', 'Cibil', 'Tenure_Disbursal', 'Roi', 'Pf', 'Insurance',
    'Emi', 'First_Emi_Date', 'Disb_Status', 'Login_Bank', 'Disbursal_Date', 'Dsa_Channel_Name',
    'Not_Disburs_Reason', 'Not_Disburs_Remark', 'Rejection_Remark', 'Description',
  ];

  const [formData, setFormData] = useState({
    Product_Loan: "",
    Bank_Name: "",
    Customer_Name: "",
    Father_Name: "",
    Mother_Name: "",
    Mobile: "",
    Personal_Email: "",
    Pan_Card: "",
    Customer_Location: "",
    Company_Name: "",
    Dob: "",
    Login_Date: "",
    Gender: "",
    Religion: "",
    Income_Source: "",
    Marital_Status: "",
    Spouse_Name: "",
    Qualification: "",
    Property_Status: "",
    Aadhar_Card_No: "",
    Current_Address_Line1: "",
    Current_Address_Line2: "",
    Current_City: "",
    Current_Landmark: "",
    Current_State: "",
    Current_Pin: "",
    Permanent_Address_Line1: "",
    Permanent_Address_Line2: "",
    Permanent_City: "",
    Permanent_Landmark: "",
    Permanent_State: "",
    Permanent_Pin: "",
    Designation: "",
    Current_Company_Work_Experience: "",
    Total_Work_Experience: "",
    Company_Type: "",
    Official_Mail: "",
    Company_Address: "",
    Company_City: "",
    Company_State: "",
    Company_Pin: "",
    Salary_Account_BankName: "",
    Annual_Ctc: "",
    Net_Salary: "",
    Obligations: "",
    Scheme_Offered: "",
    Loan_Amount_Applied: "",
    Tenure_Of_Loan: "",
    Credit_Card_Obligation: "",
    Reference1_FullName_Relative: "",
    Reference1_MobileNo: "",
    Reference1_Address1: "",
    Reference1_City: "",
    Reference1_State: "",
    Reference1_Pin: "",
    Reference2_FullName_Friend: "",
    Reference2_MobileNo: "",
    Reference2_Address1: "",
    Reference2_City: "",
    Reference2_State: "",
    Reference2_Pin: "",
    Caller_Name: "",
    TL_Name: "",
    Manager_Name: "",
    Disbursal_BankName: "",
    Loan_Application_No: "",
    Approved_Amount: "",
    Disbursal_Loan_Amount: "",
    Inhand_Disb_Account: "",
    Bt_Disb_Amount: "",
    Top_Up: "",
    Cibil: "",
    Tenure_Disbursal: "",
    Roi: "",
    Pf: "",
    Insurance: "",
    Emi: "",
    First_Emi_Date: "",
    Disb_Status: "",
    Login_Bank: "",
    Disbursal_Date: "",
    Dsa_Channel_Name: "",
    Not_Disburs_Reason: "",
    Not_Disburs_Remark: "",
    Rejection_Remark: "",
    Description: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };


  
  const [currentPage, setCurrentPage] = useState(1);
  const handleContinue = () => {
    setCurrentPage(currentPage + 1);
  };

  
  const visibleFields = allFields.slice((currentPage - 1) * fieldsPerPage, currentPage * fieldsPerPage);
  const isLastPage = currentPage * fieldsPerPage >= allFields.length;
  const handleSubmit = () => {
    // Construct and send the POST request to your API with formData
    // fetch('https://bb1e-2401-4900-1c5c-1de7-c020-63b5-c50e-797a.ngrok-free.app/addData', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    fetch(
      "https://1589-2401-4900-1c5a-9e08-db6-b77b-ffe2-9de9.ngrok-free.app/addData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json(), setFormData(""),navigate("EmployeeDashboard") )
      .then((data) => {
        // Handle the response from the API (e.g., success or error messages)
        // console.log("inserted successFully");
        // data.json();
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };


  const renderFields = (start, end) => {
    const fields = [];
    for (let i = start; i < end; i++) {
      const fieldName = `Field ${i + 1}`;
      fields.push(
        <View style={{ marginBottom: 12 }} key={i}>
          <Text style={styles.textstyle}>{fieldName}</Text>
          <View style={styles.viewsty}>
            <TextInput
              placeholder={fieldName}
              value={formData[fieldName]}
              onChangeText={(text) => handleChange(fieldName, text)}
            />
          </View>
        </View>
      );
    }
    return fields;
  };

  const renderNextFields = () => {
    // Calculate the start and end index for the next 10 fields
    const startIndex = Object.keys(formData).length;
    const endIndex = startIndex + 10;
    return renderFields(startIndex, endIndex);
  };

  return (
    <ScrollView>
    <View
            style={{
              marginTop: 40,
              marginRight: 20,
              marginBottom: 40,
              marginLeft: 20,
              marginHorizontal: 20,
            }}
          >
      {visibleFields.map((fieldName, index) => (
        <View style={styles.fieldContainer} key={index}>
          <Text style={styles.textstyle}>{fieldName}</Text>
          <TextInput
            style={styles.txtinput}
            placeholder={fieldName}
            value={formData[fieldName] || ''}
            onChangeText={(text) => handleChange(fieldName, text)}
          />
        </View>
      ))}
      {isLastPage ? (
        <View style={styles.buttonContainer}>
     
      <Button
      title="Submit"
      color="#036E8C"
      onPress={handleSubmit}
      style={{padding:10,height:20}}
          
    />
      </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button
          title="Continue"
          color="#036E8C"
          style={{padding:10}}

          onPress={handleContinue}
        />
        </View>
      )}

  </View>
    </ScrollView>
  );
      }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
  ,
  buttonContainer:{
    marginBottom:50,
    marginTop:30
  }, 
  fieldContainer:{
    marginBottom:10,
    marginEnd:10,
    marginTop:5,
    marginStart:5
  }, 
  
  textstyle: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
    marginVertical: 8,
  },
  txtinput: {
    width: "100%",
    color: COLORS.black,
    borderWidth:1,
    padding:10,
    borderRadius:8
  },
  viewsty: {
    width: "100%",
    height: 48,
    borderColor: "black",
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
    color: "black",
    height: 50,
    width: "auto",
    marginTop: 60,
  },
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: 50,
    marginTop: 100,
    marginLeft: 60,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});