// import React, { Component } from 'react';
// import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';

// const COLORS = {
//   black: 'black', // You can define your color values here
// };

// class AddMoreDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fieldsToShow: 10, // Number of fields to show at a time
//       totalFields: 30,
//       showContinueButton: true,
//       formData: [],
//     };
//   }

//   handleContinuePress = () => {
//     if (this.state.fieldsToShow + 10 >= this.state.totalFields) {
//       this.setState({ showContinueButton: false });
//     }
//     this.setState((prevState) => ({
//       fieldsToShow: prevState.fieldsToShow + 10,
//     }));
//   };

//   handleFieldChange = (index, text) => {
//     const formData = [...this.state.formData];
//     formData[index] = text;
//     this.setState({ formData });
//   };

//   sendDataToServer = async () => {
//     const data = this.state.formData;

//     try {
//       const response = await axios.post('http://your-nodejs-server-url:3000/api/addData', data);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error sending data: ' + error);
//     }
//   };

//   renderInputFields = () => {
//     const { fieldsToShow, totalFields } = this.state;
//     const inputFields = [];
//     const customLabels = [
//       'Income Source', 'Marital Status', 'Spouse Name', 'Qualification', 'Property Status', 'Addhar No', 'Address Line 1',
//       'Address Line 2', 'City', 'Landmark', 'State', 'Pin', 'Designation', 'Current Company work Experience', 'Total Work Experience',
//       'Company Type', 'Official Mail', 'Office Adress With Landmark', 'City', 'State', 'Pin', 'Salary Account Bank Name', 'Annual CTC',
//       'Net Salary', 'Obligations (Current EMI) ' ,'Scheme Offered','Loan Amount Applied ','Tenure Of Loan' , 'Credit Card Obligation' ,'Full Name'
//       ,'Mobile No' , 'Address 1', 'City' , 'State','Pin' ,'Full Name','Mobile No','Address 1', 'City' , 'State','Pin','Caller Name','TL Name' ,'Manager Name'
//     ];

//     for (let i = 0; i < fieldsToShow && i < totalFields; i++) {
//       const label = customLabels[i];
//       inputFields.push(
//         <View key={i} >
//         <Text style={styles.textStyle}>{label}</Text>
//           <TextInput
//           style={styles.viewsty}
//             placeholder={`Enter ${label}`}
//             onChangeText={(text) => this.handleFieldChange(i, text)}
//           />
//         </View>
//       );
//     }

//     return inputFields;
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView style={{ flex: 1 }}>
//           {this.renderInputFields()}

//           {this.state.showContinueButton && (
//             <Button
//               title="Continue"
//               onPress={this.handleContinuePress}
//             />
//           )}

//           {!this.state.showContinueButton && (
//             <Button
//               title="Submit"
//               onPress={this.sendDataToServer}
//             />
//           )}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginHorizontal: 22,
//     marginTop:40
//   },
//   viewsty: {
//     width: '100%',
//     height: 48,
//     borderColor: COLORS.black,
//     borderWidth: 1,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingLeft: 22,
//     flexDirection: 'row',
//     marginBottom: 30, // Add space between each input field
//   },
//   txtinput: {
//     width: '100%',
//     color: COLORS.black,
//     marginTop: 10, // Add margin from the top
//     marginBottom: 10, // Add margin from the bottom
//   },
//   textStyle: {
//     fontSize: 16,
//     fontWeight: '400',
//     marginTop: 5,
//     marginVertical: 8,
//   },
// });

// export default AddMoreDetails;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, ScrollView } from 'react-native';

// export default function AddMoreDetails() {
//   const [loan, setLoan] = useState('');
//   const [bank, setBank] = useState('');
//   const [name, setName] = useState('');
//   const [fatherName, setFatherName] = useState('');
//   const [motherName, setMotherName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [panCard, setPanCard] = useState('');
//   const [customerLocation, setCustomerLocation] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [dob, setDob] = useState('');
//   const [gender, setGender] = useState('');
//   const [religion, setReligion] = useState('');
//   const [date, setDate] = useState('');
//   const [incomeSource, setIncomeSource] = useState('Salaried');
//   const [maritalStatus, setMaritalStatus] = useState('');
//   const [spouseName, setSpouseName] = useState('');
//   const [qualification, setQualification] = useState('');
//   const [propertyStatus, setPropertyStatus] = useState('Owned');
//   const [aadharCard, setAadharCard] = useState('');
//   const [addressLine1, setAddressLine1] = useState('');
//   const [addressLine2, setAddressLine2] = useState('');
//   const [city, setCity] = useState('');
//   const [landmark, setLandmark] = useState('');
//   const [state, setState] = useState('');
//   const [pin, setPin] = useState('');
//   const [isSameAsPermanent, setIsSameAsPermanent] = useState(false);
//   const [permanentAddressLine1, setPermanentAddressLine1] = useState('');
//   const [permanentAddressLine2, setPermanentAddressLine2] = useState('');
//   const [permanentCity, setPermanentCity] = useState('');
//   const [permanentLandmark, setPermanentLandmark] = useState('');
//   const [permanentState, setPermanentState] = useState('');
//   const [permanentPin, setPermanentPin] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [currentCompanyWorkExperience, setCurrentCompanyWorkExperience] = useState('');
//   const [totalWorkExperience, setTotalWorkExperience] = useState('');
//   const [companyType, setCompanyType] = useState('Proprietor');
//   const [officialMail, setOfficialMail] = useState('');
//   const [companyAddress, setCompanyAddress] = useState('');
//   const [companyCity, setCompanyCity] = useState('');
//   const [companyState, setCompanyState] = useState('');
//   const [companyPin, setCompanyPin] = useState('');
//   const [salaryAccount, setSalaryAccount] = useState('');
//   const [annualCtc, setAnnualCtc] = useState('');
//   const [netSalary, setNetSalary] = useState('');
//   const [obligations, setObligations] = useState('');
//   const [schemeOffered, setSchemeOffered] = useState('FRESH');
//   const [loanAmountApplied, setLoanAmountApplied] = useState('');
//   const [tenureOfLoan, setTenureOfLoan] = useState('');
//   const [cardObligation, setCardObligation] = useState('');
//   const [reference1FullName, setReference1FullName] = useState('');
//   const [reference1MobileNo, setReference1MobileNo] = useState('');
//   const [reference1Address1, setReference1Address1] = useState('');
//   const [reference1City, setReference1City] = useState('');
//   const [reference1State, setReference1State] = useState('');
//   const [reference1Pin, setReference1Pin] = useState('');
//   const [reference2FullName, setReference2FullName] = useState('');
//   const [reference2MobileNo, setReference2MobileNo] = useState('');
//   const [reference2Address1, setReference2Address1] = useState('');
//   const [reference2City, setReference2City] = useState('');
//   const [reference2State, setReference2State] = useState('');
//   const [reference2Pin, setReference2Pin] = useState('');
//   const [callerName, setCallerName] = useState('');
//   const [tlName, setTlName] = useState('');
//   const [managerName, setManagerName] = useState('');

//   const handleSubmit = () => {
//     // Send a POST request to your Node.js server to save the form data
//     fetch('https://82cd-2401-4900-1c5c-1de7-c020-63b5-c50e-797a.ngrok-free.app/addData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         Loan: loan,
//         bank: bank,
//         Name: name,
//         Father_Name: fatherName,
//         Mother_Name: motherName,
//         Mobile: mobile,
//         Personal_Email: email,
//         Pan_Card: panCard,
//         Customer_location: customerLocation,
//         Company_Name: companyName,
//         Dob: dob,
//         Gender: gender,
//         Religion: religion,
//         Date: date,
//         Income_Source: incomeSource,
//         Marital_Status: maritalStatus,
//         Spouse_Name: spouseName,
//         Qualification: qualification,
//         Property_Status: propertyStatus,
//         Aadhar_Card: aadharCard,
//         Current_Address_Line1: addressLine1,
//         Current_Address_Line2: addressLine2,
//         Current_City: city,
//         Current_Landmark: landmark,
//         Current_State: state,
//         Current_Pin: pin,
//         Is_Same_As_Permanent: isSameAsPermanent,
//         Permanent_Address_Line1: permanentAddressLine1,
//         Permanent_Address_Line2: permanentAddressLine2,
//         Permanent_City: permanentCity,
//         Permanent_Landmark: permanentLandmark,
//         Permanent_State: permanentState,
//         Permanent_Pin: permanentPin,
//         Designation: designation,
//         Current_Company_Work_Experience: currentCompanyWorkExperience,
//         Total_Work_Experience: totalWorkExperience,
//         Company_Type: companyType,
//         Official_Mail: officialMail,
//         Company_Address: companyAddress,
//         Company_City: companyCity,
//         Company_State: companyState,
//         Company_Pin: companyPin,
//         Salary_Account: salaryAccount,
//         Annual_Ctc: annualCtc,
//         Net_Salary: netSalary,
//         Obligations: obligations,
//         Scheme_Offered: schemeOffered,
//         Loan_Amount_Applied: loanAmountApplied,
//         Tenure_Of_Loan: tenureOfLoan,
//         Card_Obligation: cardObligation,
//         Reference1_Full_Name: reference1FullName,
//         Reference1_Mobile_No: reference1MobileNo,
//         Reference1_Address1: reference1Address1,
//         Reference1_City: reference1City,
//         Reference1_State: reference1State,
//         Reference1_Pin: reference1Pin,
//         Reference2_Full_Name: reference2FullName,
//         Reference2_Mobile_No: reference2MobileNo,
//         Reference2_Address1: reference2Address1,
//         Reference2_City: reference2City,
//         Reference2_State: reference2State,
//         Reference2_Pin: reference2Pin,
//         Caller_Name: callerName,
//         TL_Name: tlName,
//         Manager_Name: managerName,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server
//       })
//       .catch((error) => {
//         console.error("some error occurs");
//       });
//   };

//   return (
//     <ScrollView style={{ flex: 1 }}>

//     <View>
//       <Text>Basic Details</Text>
//       <TextInput
//   placeholder="Which Loan You Want To Apply"
//   value={loan}
//   onChangeText={(text) => setLoan(text)}
// />

// <TextInput
//   placeholder="Which Bank You Want To Apply"
//   value={bank}
//   onChangeText={(text) => setBank(text)}
// />

// <TextInput
//   placeholder="Customer Name As Per Pan Card"
//   value={name}
//   onChangeText={(text) => setName(text)}
// />

// <TextInput
//   placeholder="Father's Name"
//   value={fatherName}
//   onChangeText={(text) => setFatherName(text)}
// />

// <TextInput
//   placeholder="Mother's Name"
//   value={motherName}
//   onChangeText={(text) => setMotherName(text)}
// />

// <TextInput
//   placeholder="Mobile Number"
//   value={mobile}
//   onChangeText={(text) => setMobile(text)}
// />

// <TextInput
//   placeholder="Personal Email"
//   value={email}
//   onChangeText={(text) => setEmail(text)}
// />

// <TextInput
//   placeholder="Pan Card Number"
//   value={panCard}
//   onChangeText={(text) => setPanCard(text)}
// />

// <TextInput
//   placeholder="Customer Location"
//   value={customerLocation}
//   onChangeText={(text) => setCustomerLocation(text)}
// />

// <TextInput
//   placeholder="Company Name"
//   value={companyName}
//   onChangeText={(text) => setCompanyName(text)}
// />

// <TextInput
//   placeholder="Date of Birth (DD-MM-YYYY)"
//   value={dob}
//   onChangeText={(text) => setDob(text)}
// />

// <TextInput
//   placeholder="Gender"
//   value={gender}
//   onChangeText={(text) => setGender(text)}
// />

// <TextInput
//   placeholder="Religion"
//   value={religion}
//   onChangeText={(text) => setReligion(text)}
// />

// <TextInput
//   placeholder="Date"
//   value={date}
//   onChangeText={(text) => setDate(text)}
// />

// <TextInput
//   placeholder="Income Source"
//   value={incomeSource}
//   onChangeText={(text) => setIncomeSource(text)}
// />

// <TextInput
//   placeholder="Marital Status"
//   value={maritalStatus}
//   onChangeText={(text) => setMaritalStatus(text)}
// />

// <TextInput
//   placeholder="Spouse's Name"
//   value={spouseName}
//   onChangeText={(text) => setSpouseName(text)}
// />

// <TextInput
//   placeholder="Qualification"
//   value={qualification}
//   onChangeText={(text) => setQualification(text)}
// />

// <TextInput
//   placeholder="Property Status"
//   value={propertyStatus}
//   onChangeText={(text) => setPropertyStatus(text)}
// />

// <TextInput
//   placeholder="Aadhar Card Number"
//   value={aadharCard}
//   onChangeText={(text) => setAadharCard(text)}
// />

// <TextInput
//   placeholder="Current Address Line 1"
//   value={addressLine1}
//   onChangeText={(text) => setAddressLine1(text)}
// />

// <TextInput
//   placeholder="Current Address Line 2"
//   value={addressLine2}
//   onChangeText={(text) => setAddressLine2(text)}
// />

// <TextInput
//   placeholder="City"
//   value={city}
//   onChangeText={(text) => setCity(text)}
// />

// <TextInput
//   placeholder="Landmark"
//   value={landmark}
//   onChangeText={(text) => setLandmark(text)}
// />

// <TextInput
//   placeholder="State"
//   value={state}
//   onChangeText={(text) => setState(text)}
// />

// <TextInput
//   placeholder="PIN"
//   value={pin}
//   onChangeText={(text) => setPin(text)}
// />

// <TextInput
//   placeholder="Is Permanent Address Same as Current Address?"
//   value={isSameAsPermanent}
//   onChangeText={(text) => setIsSameAsPermanent(text)}
// />

// <TextInput
//   placeholder="Permanent Address Line 1"
//   value={permanentAddressLine1}
//   onChangeText={(text) => setPermanentAddressLine1(text)}
// />

// <TextInput
//   placeholder="Permanent Address Line 2"
//   value={permanentAddressLine2}
//   onChangeText={(text) => setPermanentAddressLine2(text)}
// />

// <TextInput
//   placeholder="Permanent City"
//   value={permanentCity}
//   onChangeText={(text) => setPermanentCity(text)}
// />

// <TextInput
//   placeholder="Permanent Landmark"
//   value={permanentLandmark}
//   onChangeText={(text) => setPermanentLandmark(text)}
// />

// <TextInput
//   placeholder="Permanent State"
//   value={permanentState}
//   onChangeText={(text) => setPermanentState(text)}
// />

// <TextInput
//   placeholder="Permanent PIN"
//   value={permanentPin}
//   onChangeText={(text) => setPermanentPin(text)}
// />

// <TextInput
//   placeholder="Designation"
//   value={designation}
//   onChangeText={(text) => setDesignation(text)}
// />

// <TextInput
//   placeholder="Current Company Work Experience"
//   value={currentCompanyWorkExperience}
//   onChangeText={(text) => setCurrentCompanyWorkExperience(text)}
// />

// <TextInput
//   placeholder="Total Work Experience"
//   value={totalWorkExperience}
//   onChangeText={(text) => setTotalWorkExperience(text)}
// />

// <TextInput
//   placeholder="Company Type"
//   value={companyType}
//   onChangeText={(text) => setCompanyType(text)}
// />

// <TextInput
//   placeholder="Official Mail"
//   value={officialMail}
//   onChangeText={(text) => setOfficialMail(text)}
// />

// <TextInput
//   placeholder="Company Address"
//   value={companyAddress}
//   onChangeText={(text) => setCompanyAddress(text)}
// />

// <TextInput
//   placeholder="Company City"
//   value={companyCity}
//   onChangeText={(text) => setCompanyCity(text)}
// />

// <TextInput
//   placeholder="Company State"
//   value={companyState}
//   onChangeText={(text) => setCompanyState(text)}
// />

// <TextInput
//   placeholder="Company PIN"
//   value={companyPin}
//   onChangeText={(text) => setCompanyPin(text)}
// />

// <TextInput
//   placeholder="Salary Account"
//   value={salaryAccount}
//   onChangeText={(text) => setSalaryAccount(text)}
// />

// <TextInput
//   placeholder="Annual CTC"
//   value={annualCtc}
//   onChangeText={(text) => setAnnualCtc(text)}
// />

// <TextInput
//   placeholder="Net Salary"
//   value={netSalary}
//   onChangeText={(text) => setNetSalary(text)}
// />

// <TextInput
//   placeholder="Obligations"
//   value={obligations}
//   onChangeText={(text) => setObligations(text)}
// />

// <TextInput
//   placeholder="Scheme Offered"
//   value={schemeOffered}
//   onChangeText={(text) => setSchemeOffered(text)}
// />

// <TextInput
//   placeholder="Loan Amount Applied"
//   value={loanAmountApplied}
//   onChangeText={(text) => setLoanAmountApplied(text)}
// />

// <TextInput
//   placeholder="Tenure of Loan"
//   value={tenureOfLoan}
//   onChangeText={(text) => setTenureOfLoan(text)}
// />

// <TextInput
//   placeholder="Card Obligation"
//   value={cardObligation}
//   onChangeText={(text) => setCardObligation(text)}
// />

// <TextInput
//   placeholder="Reference 1 Full Name"
//   value={reference1FullName}
//   onChangeText={(text) => setReference1FullName(text)}
// />

// <TextInput
//   placeholder="Reference 1 Mobile No."
//   value={reference1MobileNo}
//   onChangeText={(text) => setReference1MobileNo(text)}
// />

// <TextInput
//   placeholder="Reference 1 Address Line 1"
//   value={reference1Address1}
//   onChangeText={(text) => setReference1Address1(text)}
// />

// <TextInput
//   placeholder="Reference 1 City"
//   value={reference1City}
//   onChangeText={(text) => setReference1City(text)}
// />

// <TextInput
//   placeholder="Reference 1 State"
//   value={reference1State}
//   onChangeText={(text) => setReference1State(text)}
// />

// <TextInput
//   placeholder="Reference 1 PIN"
//   value={reference1Pin}
//   onChangeText={(text) => setReference1Pin(text)}
// />

// <TextInput
//   placeholder="Reference 2 Full Name"
//   value={reference2FullName}
//   onChangeText={(text) => setReference2FullName(text)}
// />

// <TextInput
//   placeholder="Reference 2 Mobile No."
//   value={reference2MobileNo}
//   onChangeText={(text) => setReference2MobileNo(text)}
// />

// <TextInput
//   placeholder="Reference 2 Address Line 1"
//   value={reference2Address1}
//   onChangeText={(text) => setReference2Address1(text)}
// />

// <TextInput
//   placeholder="Reference 2 City"
//   value={reference2City}
//   onChangeText={(text) => setReference2City(text)}
// />

// <TextInput
//   placeholder="Reference 2 State"
//   value={reference2State}
//   onChangeText={(text) => setReference2State(text)}
// />

// <TextInput
//   placeholder="Reference 2 PIN"
//   value={reference2Pin}
//   onChangeText={(text) => setReference2Pin(text)}
// />

// <TextInput
//   placeholder="Caller Name"
//   value={callerName}
//   onChangeText={(text) => setCallerName(text)}
// />

// <TextInput
//   placeholder="Team Leader Name"
//   value={tlName}
//   onChangeText={(text) => setTlName(text)}
// />

// <TextInput
//   placeholder="Manager Name"
//   value={managerName}
//   onChangeText={(text) => setManagerName(text)}
// />

//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//     </ScrollView>

//   );
// }

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// // import axios from "axios";

// const EmployeeForm = () => {
//   const [formState, setFormState] = useState({
//     Product_Loan: "",
//     Bank_Name: "",
//     Customer_Name: "",
//     Father_Name: "",
//     Mother_Name: "",
//     Mobile: "",
//     Personal_Email: "",
//     Pan_Card: "",
//     Customer_Location: "",
//     Company_Name: "",
//     Dob: "",
//     Login_Date: "",
//     Gender: "",
//     Religion: "",
//     Income_Source: "",
//     Marital_Status: "",
//     Spouse_Name: "",
//     Qualification: "",
//     Property_Status: "",
//     Aadhar_Card_No: "",
//     Current_Address_Line1: "",
//     Current_Address_Line2: "",
//     Current_City: "",
//     Current_Landmark: "",
//     Current_State: "",
//     Current_Pin: "",
//     Permanent_Address_Line1: "",
//     Permanent_Address_Line2: "",
//     Permanent_City: "",
//     Permanent_Landmark: "",
//     Permanent_State: "",
//     Permanent_Pin: "",
//     Designation: "",
//     Current_Company_Work_Experience: "",
//     Total_Work_Experience: "",
//     Company_Type: "",
//     Official_Mail: "",
//     Company_Address: "",
//     Company_City: "",
//     Company_State: "",
//     Company_Pin: "",
//     Salary_Account_BankName: "",
//     Annual_Ctc: "",
//     Net_Salary: "",
//     Obligations: "",
//     Scheme_Offered: "",
//     Loan_Amount_Applied: "",
//     Tenure_Of_Loan: "",
//     Credit_Card_Obligation: "",
//     Reference1_FullName_Relative: "",
//     Reference1_MobileNo: "",
//     Reference1_Address1: "",
//     Reference1_City: "",
//     Reference1_State: "",
//     Reference1_Pin: "",
//     Reference2_FullName_Friend: "",
//     Reference2_MobileNo: "",
//     Reference2_Address1: "",
//     Reference2_City: "",
//     Reference2_State: "",
//     Reference2_Pin: "",
//     Caller_Name: "",
//     TL_Name: "",
//     Manager_Name: "",
//     Disbursal_BankName: "",
//     Loan_Application_No: "",
//     Approved_Amount: "",
//     Disbursal_Loan_Amount: "",
//     Inhand_Disb_Account: "",
//     Bt_Disb_Amount: "",
//     Top_Up: "",
//     Cibil: "",
//     Tenure_Disbursal: "",
//     Roi: "",
//     Pf: "",
//     Insurance: "",
//     Emi: "",
//     First_Emi_Date: "",
//     Disb_Status: "",
//     Login_Bank: "",
//     Disbursal_Date: "",
//     Dsa_Channel_Name: "",
//     Not_Disburs_Reason: "",
//     Not_Disburs_Remark: "",
//     Rejection_Remark: "",
//     Description: "",
//   });

//   const handleSubmit = () => {
//     const data = {
//       Product_Loan: formState.Product_Loan,
//       Bank_Name: formState.Bank_Name,
//       Customer_Name: formState.Customer_Name,
//       Father_Name: formState.Father_Name,
//       Mother_Name: formState.Mother_Name,
//       Mobile: formState.Mobile,
//       Personal_Email: formState.Personal_Email,
//       Pan_Card: formState.Pan_Card,
//       Customer_Location: formState.Customer_Location,
//       Company_Name: formState.Company_Name,
//       Dob: formState.Dob,
//       Login_Date: formState.Login_Date,
//       Gender: formState.Gender,
//       Religion: formState.Religion,
//       Income_Source: formState.Income_Source,
//       Marital_Status: formState.Marital_Status,
//       Spouse_Name: formState.Spouse_Name,
//       Qualification: formState.Qualification,
//       Property_Status: formState.Property_Status,
//       Aadhar_Card_No: formState.Aadhar_Card_No,
//       Current_Address_Line1: formState.Current_Address_Line1,
//       Current_Address_Line2: formState.Current_Address_Line2,
//       Current_City: formState.Current_City,
//       Current_Landmark: formState.Current_Landmark,
//       Current_State: formState.Current_State,
//       Current_Pin: formState.Current_Pin,
//       Permanent_Address_Line1: formState.Permanent_Address_Line1,
//       Permanent_Address_Line2: formState.Permanent_Address_Line2,
//       Permanent_City: formState.Permanent_City,
//       Permanent_Landmark: formState.Permanent_Landmark,
//       Permanent_State: formState.Permanent_State,
//       Permanent_Pin: formState.Permanent_Pin,
//       Designation: formState.Designation,
//       Current_Company_Work_Experience:
//         formState.Current_Company_Work_Experience,
//       Total_Work_Experience: formState.Total_Work_Experience,
//       Company_Type: formState.Company_Type,
//       Official_Mail: formState.Official_Mail,
//       Company_Address: formState.Company_Address,
//       Company_City: formState.Company_City,
//       Company_State: formState.Company_State,
//       Company_Pin: formState.Company_Pin,
//       Salary_Account_BankName: formState.Salary_Account_BankName,
//       Annual_Ctc: formState.Annual_Ctc,
//       Net_Salary: formState.Net_Salary,
//       Obligations: formState.Obligations,
//       Scheme_Offered: formState.Scheme_Offered,
//       Loan_Amount_Applied: formState.Loan_Amount_Applied,
//       Tenure_Of_Loan: formState.Tenure_Of_Loan,
//       Credit_Card_Obligation: formState.Credit_Card_Obligation,
//       Reference1_FullName_Relative: formState.Reference1_FullName_Relative,
//       Reference1_MobileNo: formState.Reference1_MobileNo,
//       Reference1_Address1: formState.Reference1_Address1,
//       Reference1_City: formState.Reference1_City,
//       Reference1_State: formState.Reference1_State,
//       Reference1_Pin: formState.Reference1_Pin,
//       Reference2_FullName_Friend: formState.Reference2_FullName_Friend,
//       Reference2_MobileNo: formState.Reference2_MobileNo,
//       Reference2_Address1: formState.Reference2_Address1,
//       Reference2_City: formState.Reference2_City,
//       Reference2_State: formState.Reference2_State,
//       Reference2_Pin: formState.Reference2_Pin,
//       Caller_Name: formState.Caller_Name,
//       TL_Name: formState.TL_Name,
//       Manager_Name: formState.Manager_Name,
//       Disbursal_BankName: formState.Disbursal_BankName,
//       Loan_Application_No: formState.Loan_Application_No,
//       Approved_Amount: formState.Approved_Amount,
//       Disbursal_Loan_Amount: formState.Disbursal_Loan_Amount,
//       Inhand_Disb_Account: formState.Inhand_Disb_Account,
//       Bt_Disb_Amount: formState.Bt_Disb_Amount,
//       Top_Up: formState.Top_Up,
//       Cibil: formState.Cibil,
//       Tenure_Disbursal: formState.Tenure_Disbursal,
//       Roi: formState.Roi,
//       Pf: formState.Pf,
//       Insurance: formState.Insurance,
//       Emi: formState.Emi,
//       First_Emi_Date: formState.First_Emi_Date,
//       Disb_Status: formState.Disb_Status,
//       Login_Bank: formState.Login_Bank,
//       Disbursal_Date: formState.Disbursal_Date,
//       Dsa_Channel_Name: formState.Dsa_Channel_Name,
//       Not_Disburs_Reason: formState.Not_Disburs_Reason,
//       Not_Disburs_Remark: formState.Not_Disburs_Remark,
//       Rejection_Remark: formState.Rejection_Remark,
//       Description: formState.Description,
//     };

//     // axios.post('https://82cd-2401-4900-1c5c-1de7-c020-63b5-c50e-797a.ngrok-free.app/addData', data)
//     //   .then((response) => {
//     //     console.log('Data submitted successfully:', response.data);
//     //   })
//     //   .catch((error) => {
//     //     console.error('Error submitting data:', error);
//     //   });
//     // Send a POST request to your backend API
//     fetch(
//       "https://82cd-2401-4900-1c5c-1de7-c020-63b5-c50e-797a.ngrok-free.app/addData",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Handle the response from the backend
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <Text>Employee Form</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Product Loan"
//           onChangeText={(Product_Loan) =>
//             setFormState({ ...formState, Product_Loan })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Bank Name"
//           onChangeText={(Bank_Name) =>
//             setFormState({ ...formState, Bank_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Customer Name"
//           onChangeText={(Customer_Name) =>
//             setFormState({ ...formState, Customer_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Father Name"
//           onChangeText={(Father_Name) =>
//             setFormState({ ...formState, Father_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mother Name"
//           onChangeText={(Mother_Name) =>
//             setFormState({ ...formState, Mother_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile"
//           onChangeText={(Mobile) => setFormState({ ...formState, Mobile })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Personal Email"
//           onChangeText={(Personal_Email) =>
//             setFormState({ ...formState, Personal_Email })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Pan Card"
//           onChangeText={(Pan_Card) => setFormState({ ...formState, Pan_Card })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Customer Location"
//           onChangeText={(Customer_Location) =>
//             setFormState({ ...formState, Customer_Location })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Company Name"
//           onChangeText={(Company_Name) =>
//             setFormState({ ...formState, Company_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="DOB"
//           onChangeText={(Dob) => setFormState({ ...formState, Dob })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Login Date"
//           onChangeText={(Login_Date) =>
//             setFormState({ ...formState, Login_Date })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Gender"
//           onChangeText={(Gender) => setFormState({ ...formState, Gender })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Religion"
//           onChangeText={(Religion) => setFormState({ ...formState, Religion })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Income Source"
//           onChangeText={(Income_Source) =>
//             setFormState({ ...formState, Income_Source })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Marital Status"
//           onChangeText={(Marital_Status) =>
//             setFormState({ ...formState, Marital_Status })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Spouse Name"
//           onChangeText={(Spouse_Name) =>
//             setFormState({ ...formState, Spouse_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Qualification"
//           onChangeText={(Qualification) =>
//             setFormState({ ...formState, Qualification })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Property Status"
//           onChangeText={(Property_Status) =>
//             setFormState({ ...formState, Property_Status })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Aadhar Card No"
//           onChangeText={(Aadhar_Card_No) =>
//             setFormState({ ...formState, Aadhar_Card_No })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Current Address Line1"
//           onChangeText={(Current_Address_Line1) =>
//             setFormState({ ...formState, Current_Address_Line1 })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Current Address Line2"
//           onChangeText={(Current_Address_Line2) =>
//             setFormState({ ...formState, Current_Address_Line2 })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Current City"
//           onChangeText={(Current_City) =>
//             setFormState({ ...formState, Current_City })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Current Landmark"
//           onChangeText={(Current_Landmark) =>
//             setFormState({ ...formState, Current_Landmark })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Current State"
//           onChangeText={(Current_State) =>
//             setFormState({ ...formState, Current_State })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Current Pin"
//           onChangeText={(Current_Pin) =>
//             setFormState({ ...formState, Current_Pin })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Permanent Address Line1"
//           onChangeText={(Permanent_Address_Line1) =>
//             setFormState({ ...formState, Permanent_Address_Line1 })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Permanent Address Line2"
//           onChangeText={(Permanent_Address_Line2) =>
//             setFormState({ ...formState, Permanent_Address_Line2 })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Permanent City"
//           onChangeText={(Permanent_City) =>
//             setFormState({ ...formState, Permanent_City })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Permanent Landmark"
//           onChangeText={(Permanent_Landmark) =>
//             setFormState({ ...formState, Permanent_Landmark })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Permanent State"
//           onChangeText={(Permanent_State) =>
//             setFormState({ ...formState, Permanent_State })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Permanent Pin"
//           onChangeText={(Permanent_Pin) =>
//             setFormState({ ...formState, Permanent_Pin })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Designation"
//           onChangeText={(Designation) =>
//             setFormState({ ...formState, Designation })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Current Company Work Experience"
//           onChangeText={(Current_Company_Work_Experience) =>
//             setFormState({ ...formState, Current_Company_Work_Experience })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Total Work Experience"
//           onChangeText={(Total_Work_Experience) =>
//             setFormState({ ...formState, Total_Work_Experience })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Company Type"
//           onChangeText={(Company_Type) =>
//             setFormState({ ...formState, Company_Type })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Official Mail"
//           onChangeText={(Official_Mail) =>
//             setFormState({ ...formState, Official_Mail })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Company Address"
//           onChangeText={(Company_Address) =>
//             setFormState({ ...formState, Company_Address })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Company City"
//           onChangeText={(Company_City) =>
//             setFormState({ ...formState, Company_City })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Company State"
//           onChangeText={(Company_State) =>
//             setFormState({ ...formState, Company_State })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Company Pin"
//           onChangeText={(Company_Pin) =>
//             setFormState({ ...formState, Company_Pin })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Salary Account BankName"
//           onChangeText={(Salary_Account_BankName) =>
//             setFormState({ ...formState, Salary_Account_BankName })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Annual Ctc"
//           onChangeText={(Annual_Ctc) =>
//             setFormState({ ...formState, Annual_Ctc })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Net Salary"
//           onChangeText={(Net_Salary) =>
//             setFormState({ ...formState, Net_Salary })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Obligations"
//           onChangeText={(Obligations) =>
//             setFormState({ ...formState, Obligations })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Scheme Offered"
//           onChangeText={(Scheme_Offered) =>
//             setFormState({ ...formState, Scheme_Offered })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Loan Amount Applied"
//           onChangeText={(Loan_Amount_Applied) =>
//             setFormState({ ...formState, Loan_Amount_Applied })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Tenure Of Loan"
//           onChangeText={(Tenure_Of_Loan) =>
//             setFormState({ ...formState, Tenure_Of_Loan })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Credit Card Obligation"
//           onChangeText={(Credit_Card_Obligation) =>
//             setFormState({ ...formState, Credit_Card_Obligation })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference1 Full Name Relative"
//           onChangeText={(Reference1_FullName_Relative) =>
//             setFormState({ ...formState, Reference1_FullName_Relative })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference1 Mobile No"
//           onChangeText={(Reference1_MobileNo) =>
//             setFormState({ ...formState, Reference1_MobileNo })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference1 Address1"
//           onChangeText={(Reference1_Address1) =>
//             setFormState({ ...formState, Reference1_Address1 })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference1 City"
//           onChangeText={(Reference1_City) =>
//             setFormState({ ...formState, Reference1_City })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference1 State"
//           onChangeText={(Reference1_State) =>
//             setFormState({ ...formState, Reference1_State })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference1 Pin"
//           onChangeText={(Reference1_Pin) =>
//             setFormState({ ...formState, Reference1_Pin })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference2 Full Name Friend"
//           onChangeText={(Reference2_FullName_Friend) =>
//             setFormState({ ...formState, Reference2_FullName_Friend })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference2 Mobile No"
//           onChangeText={(Reference2_MobileNo) =>
//             setFormState({ ...formState, Reference2_MobileNo })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference2 Address1"
//           onChangeText={(Reference2_Address1) =>
//             setFormState({ ...formState, Reference2_Address1 })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference2 City"
//           onChangeText={(Reference2_City) =>
//             setFormState({ ...formState, Reference2_City })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference2 State"
//           onChangeText={(Reference2_State) =>
//             setFormState({ ...formState, Reference2_State })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Reference2 Pin"
//           onChangeText={(Reference2_Pin) =>
//             setFormState({ ...formState, Reference2_Pin })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Caller Name"
//           onChangeText={(Caller_Name) =>
//             setFormState({ ...formState, Caller_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="TL Name"
//           onChangeText={(TL_Name) => setFormState({ ...formState, TL_Name })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Manager Name"
//           onChangeText={(Manager_Name) =>
//             setFormState({ ...formState, Manager_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Disbursal BankName"
//           onChangeText={(Disbursal_BankName) =>
//             setFormState({ ...formState, Disbursal_BankName })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Loan Application No"
//           onChangeText={(Loan_Application_No) =>
//             setFormState({ ...formState, Loan_Application_No })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Approved Amount"
//           onChangeText={(Approved_Amount) =>
//             setFormState({ ...formState, Approved_Amount })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Disbursal Loan Amount"
//           onChangeText={(Disbursal_Loan_Amount) =>
//             setFormState({ ...formState, Disbursal_Loan_Amount })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Inhand Disb Account"
//           onChangeText={(Inhand_Disb_Account) =>
//             setFormState({ ...formState, Inhand_Disb_Account })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="BT Disb Amount"
//           onChangeText={(Bt_Disb_Amount) =>
//             setFormState({ ...formState, Bt_Disb_Amount })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Top Up"
//           onChangeText={(Top_Up) => setFormState({ ...formState, Top_Up })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Cibil"
//           onChangeText={(Cibil) => setFormState({ ...formState, Cibil })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Tenure Disbursal"
//           onChangeText={(Tenure_Disbursal) =>
//             setFormState({ ...formState, Tenure_Disbursal })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="ROI"
//           onChangeText={(Roi) => setFormState({ ...formState, Roi })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="PF"
//           onChangeText={(Pf) => setFormState({ ...formState, Pf })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Insurance"
//           onChangeText={(Insurance) =>
//             setFormState({ ...formState, Insurance })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="EMI"
//           onChangeText={(Emi) => setFormState({ ...formState, Emi })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="First EMI Date"
//           onChangeText={(First_Emi_Date) =>
//             setFormState({ ...formState, First_Emi_Date })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Disb Status"
//           onChangeText={(Disb_Status) =>
//             setFormState({ ...formState, Disb_Status })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Login Bank"
//           onChangeText={(Login_Bank) =>
//             setFormState({ ...formState, Login_Bank })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Disbursal Date"
//           onChangeText={(Disbursal_Date) =>
//             setFormState({ ...formState, Disbursal_Date })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="DSA Channel Name"
//           onChangeText={(Dsa_Channel_Name) =>
//             setFormState({ ...formState, Dsa_Channel_Name })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Not Disbursal Reason"
//           onChangeText={(Not_Disburs_Reason) =>
//             setFormState({ ...formState, Not_Disburs_Reason })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Not Disbursal Remark"
//           onChangeText={(Not_Disburs_Remark) =>
//             setFormState({ ...formState, Not_Disburs_Remark })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Rejection Remark"
//           onChangeText={(Rejection_Remark) =>
//             setFormState({ ...formState, Rejection_Remark })
//           }
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           onChangeText={(Description) =>
//             setFormState({ ...formState, Description })
//           }
//         />
//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     // flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     width: "80%",
//   },
//   input: {
//     width: "100%",
//     borderWidth: 1,
//     borderColor: "gray",
//     marginBottom: 10,
//     padding: 10,
//   },
// });

// export default EmployeeForm;




import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView ,Text } from 'react-native';

export default function FormComponent() {
  const [formData, setFormData] = useState({
    Product_Loan: '',
    Bank_Name: '',
    Customer_Name: '',
    Father_Name: '',
    Mother_Name: '',
    Mobile: '',
    Personal_Email: '',
    Pan_Card: '',
    Customer_Location: '',
    Company_Name: '',
    Dob: '',
    Login_Date: '',
    Gender: '',
    Religion: '',
    Income_Source: '',
    Marital_Status: '',
    Spouse_Name: '',
    Qualification: '',
    Property_Status: '',
    Aadhar_Card_No: '',
    Current_Address_Line1: '',
    Current_Address_Line2: '',
    Current_City: '',
    Current_Landmark: '',
    Current_State: '',
    Current_Pin: '',
    Permanent_Address_Line1: '',
    Permanent_Address_Line2: '',
    Permanent_City: '',
    Permanent_Landmark: '',
    Permanent_State: '',
    Permanent_Pin: '',
    Designation: '',
    Current_Company_Work_Experience: '',
    Total_Work_Experience: '',
    Company_Type: '',
    Official_Mail: '',
    Company_Address: '',
    Company_City: '',
    Company_State: '',
    Company_Pin: '',
    Salary_Account_BankName: '',
    Annual_Ctc: '',
    Net_Salary: '',
    Obligations: '',
    Scheme_Offered: '',
    Loan_Amount_Applied: '',
    Tenure_Of_Loan: '',
    Credit_Card_Obligation: '',
    Reference1_FullName_Relative: '',
    Reference1_MobileNo: '',
    Reference1_Address1: '',
    Reference1_City: '',
    Reference1_State: '',
    Reference1_Pin: '',
    Reference2_FullName_Friend: '',
    Reference2_MobileNo: '',
    Reference2_Address1: '',
    Reference2_City: '',
    Reference2_State: '',
    Reference2_Pin: '',
    Caller_Name: '',
    TL_Name: '',
    Manager_Name: '',
    Disbursal_BankName: '',
    Loan_Application_No: '',
    Approved_Amount: '',
    Disbursal_Loan_Amount: '',
    Inhand_Disb_Account: '',
    Bt_Disb_Amount: '',
    Top_Up: '',
    Cibil: '',
    Tenure_Disbursal: '',
    Roi: '',
    Pf: '',
    Insurance: '',
    Emi: '',
    First_Emi_Date: '',
    Disb_Status: '',
    Login_Bank: '',
    Disbursal_Date: '',
    Dsa_Channel_Name: '',
    Not_Disburs_Reason: '',
    Not_Disburs_Remark: '',
    Rejection_Remark: '',
    Description: '',
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    // Construct and send the POST request to your API with formData
    // fetch('https://bb1e-2401-4900-1c5c-1de7-c020-63b5-c50e-797a.ngrok-free.app/addData', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    fetch('https://1578-2401-4900-1c5c-1de7-c020-63b5-c50e-797a.ngrok-free.app/addData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API (e.g., success or error messages)
        console.log("inserted successFully");
        // data.json();
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <ScrollView>
    <Text>karan pandey</Text>
    <TextInput
    placeholder="Product Loan"
    value={formData.Product_Loan}
    onChangeText={(text) => handleChange('Product_Loan', text)}
  />
  
  <TextInput
    placeholder="Bank Name"
    value={formData.Bank_Name}
    onChangeText={(text) => handleChange('Bank_Name', text)}
  />
  
  <TextInput
    placeholder="Customer Name"
    value={formData.Customer_Name}
    onChangeText={(text) => handleChange('Customer_Name', text)}
  />
  
  <TextInput
    placeholder="Father Name"
    value={formData.Father_Name}
    onChangeText={(text) => handleChange('Father_Name', text)}
  />
  
  <TextInput
    placeholder="Mother Name"
    value={formData.Mother_Name}
    onChangeText={(text) => handleChange('Mother_Name', text)}
  />
  
  <TextInput
    placeholder="Mobile"
    value={formData.Mobile}
    onChangeText={(text) => handleChange('Mobile', text)}
  />
  
  <TextInput
    placeholder="Personal Email"
    value={formData.Personal_Email}
    onChangeText={(text) => handleChange('Personal_Email', text)}
  />
  
  <TextInput
    placeholder="Pan Card"
    value={formData.Pan_Card}
    onChangeText={(text) => handleChange('Pan_Card', text)}
  />
  
  <TextInput
    placeholder="Customer Location"
    value={formData.Customer_Location}
    onChangeText={(text) => handleChange('Customer_Location', text)}
  />
  
  <TextInput
    placeholder="Company Name"
    value={formData.Company_Name}
    onChangeText={(text) => handleChange('Company_Name', text)}
  />
  
  <TextInput
    placeholder="Dob"
    value={formData.Dob}
    onChangeText={(text) => handleChange('Dob', text)}
  />
  
  <TextInput
    placeholder="Login Date"
    value={formData.Login_Date}
    onChangeText={(text) => handleChange('Login_Date', text)}
  />
  
  <TextInput
    placeholder="Gender"
    value={formData.Gender}
    onChangeText={(text) => handleChange('Gender', text)}
  />
  
  <TextInput
    placeholder="Religion"
    value={formData.Religion}
    onChangeText={(text) => handleChange('Religion', text)}
  />
  
  <TextInput
    placeholder="Income Source"
    value={formData.Income_Source}
    onChangeText={(text) => handleChange('Income_Source', text)}
  />
  
  <TextInput
    placeholder="Marital Status"
    value={formData.Marital_Status}
    onChangeText={(text) => handleChange('Marital_Status', text)}
  />
  
  <TextInput
    placeholder="Spouse Name"
    value={formData.Spouse_Name}
    onChangeText={(text) => handleChange('Spouse_Name', text)}
  />
  
  <TextInput
    placeholder="Qualification"
    value={formData.Qualification}
    onChangeText={(text) => handleChange('Qualification', text)}
  />
  
  <TextInput
    placeholder="Property Status"
    value={formData.Property_Status}
    onChangeText={(text) => handleChange('Property_Status', text)}
  />
  
  <TextInput
    placeholder="Aadhar Card No"
    value={formData.Aadhar_Card_No}
    onChangeText={(text) => handleChange('Aadhar_Card_No', text)}
  />
  
  <TextInput
    placeholder="Current Address Line1"
    value={formData.Current_Address_Line1}
    onChangeText={(text) => handleChange('Current_Address_Line1', text)}
  />
  
  <TextInput
    placeholder="Current Address Line2"
    value={formData.Current_Address_Line2}
    onChangeText={(text) => handleChange('Current_Address_Line2', text)}
  />
  
  <TextInput
    placeholder="Current City"
    value={formData.Current_City}
    onChangeText={(text) => handleChange('Current_City', text)}
  />
  
  <TextInput
    placeholder="Current Landmark"
    value={formData.Current_Landmark}
    onChangeText={(text) => handleChange('Current_Landmark', text)}
  />
  
  <TextInput
    placeholder="Current State"
    value={formData.Current_State}
    onChangeText={(text) => handleChange('Current_State', text)}
  />
  
  <TextInput
    placeholder="Current Pin"
    value={formData.Current_Pin}
    onChangeText={(text) => handleChange('Current_Pin', text)}
  />
  
  <TextInput
    placeholder="Permanent Address Line1"
    value={formData.Permanent_Address_Line1}
    onChangeText={(text) => handleChange('Permanent_Address_Line1', text)}
  />
  
  <TextInput
    placeholder="Permanent Address Line2"
    value={formData.Permanent_Address_Line2}
    onChangeText={(text) => handleChange('Permanent_Address_Line2', text)}
  />
  
  <TextInput
    placeholder="Permanent City"
    value={formData.Permanent_City}
    onChangeText={(text) => handleChange('Permanent_City', text)}
  />
  
  <TextInput
    placeholder="Permanent Landmark"
    value={formData.Permanent_Landmark}
    onChangeText={(text) => handleChange('Permanent_Landmark', text)}
  />
  
  <TextInput
    placeholder="Permanent State"
    value={formData.Permanent_State}
    onChangeText={(text) => handleChange('Permanent_State', text)}
  />
  
  <TextInput
    placeholder="Permanent Pin"
    value={formData.Permanent_Pin}
    onChangeText={(text) => handleChange('Permanent_Pin', text)}
  />
  
  <TextInput
    placeholder="Designation"
    value={formData.Designation}
    onChangeText={(text) => handleChange('Designation', text)}
  />
  
  <TextInput
    placeholder="Current Company Work Experience"
    value={formData.Current_Company_Work_Experience}
    onChangeText={(text) => handleChange('Current_Company_Work_Experience', text)}
  />
  
  <TextInput
    placeholder="Total Work Experience"
    value={formData.Total_Work_Experience}
    onChangeText={(text) => handleChange('Total_Work_Experience', text)}
  />
  
  <TextInput
    placeholder="Company Type"
    value={formData.Company_Type}
    onChangeText={(text) => handleChange('Company_Type', text)}
  />
  
  <TextInput
    placeholder="Official Mail"
    value={formData.Official_Mail}
    onChangeText={(text) => handleChange('Official_Mail', text)}
  />
  
  <TextInput
    placeholder="Company Address"
    value={formData.Company_Address}
    onChangeText={(text) => handleChange('Company_Address', text)}
  />
  
  <TextInput
    placeholder="Company City"
    value={formData.Company_City}
    onChangeText={(text) => handleChange('Company_City', text)}
  />
  
  <TextInput
    placeholder="Company State"
    value={formData.Company_State}
    onChangeText={(text) => handleChange('Company_State', text)}
  />
  
  <TextInput
    placeholder="Company Pin"
    value={formData.Company_Pin}
    onChangeText={(text) => handleChange('Company_Pin', text)}
  />
  
  <TextInput
    placeholder="Salary Account BankName"
    value={formData.Salary_Account_BankName}
    onChangeText={(text) => handleChange('Salary_Account_BankName', text)}
  />
  
  <TextInput
    placeholder="Annual Ctc"
    value={formData.Annual_Ctc}
    onChangeText={(text) => handleChange('Annual_Ctc', text)}
  />
  
  <TextInput
    placeholder="Net Salary"
    value={formData.Net_Salary}
    onChangeText={(text) => handleChange('Net_Salary', text)}
  />
  
  <TextInput
    placeholder="Obligations"
    value={formData.Obligations}
    onChangeText={(text) => handleChange('Obligations', text)}
  />
  
  <TextInput
    placeholder="Scheme Offered"
    value={formData.Scheme_Offered}
    onChangeText={(text) => handleChange('Scheme_Offered', text)}
  />
  
  <TextInput
    placeholder="Loan Amount Applied"
    value={formData.Loan_Amount_Applied}
    onChangeText={(text) => handleChange('Loan_Amount_Applied', text)}
  />
  
  <TextInput
    placeholder="Tenure Of Loan"
    value={formData.Tenure_Of_Loan}
    onChangeText={(text) => handleChange('Tenure_Of_Loan', text)}
  />
  
  <TextInput
    placeholder="Credit Card Obligation"
    value={formData.Credit_Card_Obligation}
    onChangeText={(text) => handleChange('Credit_Card_Obligation', text)}
  />
  
  <TextInput
    placeholder="Reference1 Full Name Relative"
    value={formData.Reference1_FullName_Relative}
    onChangeText={(text) => handleChange('Reference1_FullName_Relative', text)}
  />
  
  <TextInput
    placeholder="Reference1 MobileNo"
    value={formData.Reference1_MobileNo}
    onChangeText={(text) => handleChange('Reference1_MobileNo', text)}
  />
  
  <TextInput
    placeholder="Reference1 Address1"
    value={formData.Reference1_Address1}
    onChangeText={(text) => handleChange('Reference1_Address1', text)}
  />
  
  <TextInput
    placeholder="Reference1 City"
    value={formData.Reference1_City}
    onChangeText={(text) => handleChange('Reference1_City', text)}
  />
  
  <TextInput
    placeholder="Reference1 State"
    value={formData.Reference1_State}
    onChangeText={(text) => handleChange('Reference1_State', text)}
  />
  
  <TextInput
    placeholder="Reference1 Pin"
    value={formData.Reference1_Pin}
    onChangeText={(text) => handleChange('Reference1_Pin', text)}
  />
  
  <TextInput
    placeholder="Reference2 Full Name Friend"
    value={formData.Reference2_FullName_Friend}
    onChangeText={(text) => handleChange('Reference2_FullName_Friend', text)}
  />
  
  <TextInput
    placeholder="Reference2 MobileNo"
    value={formData.Reference2_MobileNo}
    onChangeText={(text) => handleChange('Reference2_MobileNo', text)}
  />
  
  <TextInput
    placeholder="Reference2 Address1"
    value={formData.Reference2_Address1}
    onChangeText={(text) => handleChange('Reference2_Address1', text)}
  />
  
  <TextInput
    placeholder="Reference2 City"
    value={formData.Reference2_City}
    onChangeText={(text) => handleChange('Reference2_City', text)}
  />
  
  <TextInput
    placeholder="Reference2 State"
    value={formData.Reference2_State}
    onChangeText={(text) => handleChange('Reference2_State', text)}
  />
  
  <TextInput
    placeholder="Reference2 Pin"
    value={formData.Reference2_Pin}
    onChangeText={(text) => handleChange('Reference2_Pin', text)}
  />
  
  <TextInput
    placeholder="Caller Name"
    value={formData.Caller_Name}
    onChangeText={(text) => handleChange('Caller_Name', text)}
  />
  
  <TextInput
    placeholder="TL Name"
    value={formData.TL_Name}
    onChangeText={(text) => handleChange('TL_Name', text)}
  />
  
  <TextInput
    placeholder="Manager Name"
    value={formData.Manager_Name}
    onChangeText={(text) => handleChange('Manager_Name', text)}
  />
  
  <TextInput
    placeholder="Disbursal BankName"
    value={formData.Disbursal_BankName}
    onChangeText={(text) => handleChange('Disbursal_BankName', text)}
  />
  
  <TextInput
    placeholder="Loan Application No"
    value={formData.Loan_Application_No}
    onChangeText={(text) => handleChange('Loan_Application_No', text)}
  />
  
  <TextInput
    placeholder="Approved Amount"
    value={formData.Approved_Amount}
    onChangeText={(text) => handleChange('Approved_Amount', text)}
  />
  
  <TextInput
    placeholder="Disbursal Loan Amount"
    value={formData.Disbursal_Loan_Amount}
    onChangeText={(text) => handleChange('Disbursal_Loan_Amount', text)}
  />
  
  <TextInput
    placeholder="Inhand Disb Account"
    value={formData.Inhand_Disb_Account}
    onChangeText={(text) => handleChange('Inhand_Disb_Account', text)}
  />
  
  <TextInput
    placeholder="Bt Disb Amount"
    value={formData.Bt_Disb_Amount}
    onChangeText={(text) => handleChange('Bt_Disb_Amount', text)}
  />
  
  <TextInput
    placeholder="Top Up"
    value={formData.Top_Up}
    onChangeText={(text) => handleChange('Top_Up', text)}
  />
  
  <TextInput
    placeholder="Cibil"
    value={formData.Cibil}
    onChangeText={(text) => handleChange('Cibil', text)}
  />
  
  <TextInput
    placeholder="Tenure Disbursal"
    value={formData.Tenure_Disbursal}
    onChangeText={(text) => handleChange('Tenure_Disbursal', text)}
  />
  
  <TextInput
    placeholder="Roi"
    value={formData.Roi}
    onChangeText={(text) => handleChange('Roi', text)}
  />
  
  <TextInput
    placeholder="Pf"
    value={formData.Pf}
    onChangeText={(text) => handleChange('Pf', text)}
  />
  
  <TextInput
    placeholder="Insurance"
    value={formData.Insurance}
    onChangeText={(text) => handleChange('Insurance', text)}
  />
  
  <TextInput
    placeholder="Emi"
    value={formData.Emi}
    onChangeText={(text) => handleChange('Emi', text)}
  />
  
  <TextInput
    placeholder="First Emi Date"
    value={formData.First_Emi_Date}
    onChangeText={(text) => handleChange('First_Emi_Date', text)}
  />
  
  <TextInput
    placeholder="Disb Status"
    value={formData.Disb_Status}
    onChangeText={(text) => handleChange('Disb_Status', text)}
  />
  
  <TextInput
    placeholder="Login Bank"
    value={formData.Login_Bank}
    onChangeText={(text) => handleChange('Login_Bank', text)}
  />
  
  <TextInput
    placeholder="Disbursal Date"
    value={formData.Disbursal_Date}
    onChangeText={(text) => handleChange('Disbursal_Date', text)}
  />
  
  <TextInput
    placeholder="Dsa Channel Name"
    value={formData.Dsa_Channel_Name}
    onChangeText={(text) => handleChange('Dsa_Channel_Name', text)}
  />
  
  <TextInput
    placeholder="Not Disburs Reason"
    value={formData.Not_Disburs_Reason}
    onChangeText={(text) => handleChange('Not_Disburs_Reason', text)}
  />
  
  <TextInput
    placeholder="Not Disburs Remark"
    value={formData.Not_Disburs_Remark}
    onChangeText={(text) => handleChange('Not_Disburs_Remark', text)}
  />
  
  <TextInput
    placeholder="Rejection Remark"
    value={formData.Rejection_Remark}
    onChangeText={(text) => handleChange('Rejection_Remark', text)}
  />
  
  <TextInput
    placeholder="Description"
    value={formData.Description}
    onChangeText={(text) => handleChange('Description', text)}
  />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}
