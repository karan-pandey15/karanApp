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
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API (e.g., success or error messages)
        // console.log("inserted successFully");
        navigation.navigate('EmployeeDashboard');
        // data.json();
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  const handleFormSubmit = () => {
    navigate("EmployeeDashboard");
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
        <Button
        title="Submit"
        filled
        style={{
          marginTop: 18,
          marginBottom: 80,
        }}
        onPress={handleSubmit}
      />
      ) : (
        <View style={styles.buttonContainer}>
          <Button title="Continue" onPress={handleContinue} />
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