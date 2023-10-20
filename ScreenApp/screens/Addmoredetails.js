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
import { useNavigation } from '@react-navigation/native'; 
export default function FormComponent({navigation}) {
  const { navigate } = navigation;
  // const navigation = useNavigation();

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

  // const handleSubmit = () => {
  //   // Construct and send the POST request to your API with formData
  //   // fetch('https://bb1e-2401-4900-1c5c-1de7-c020-63b5-c50e-797a.ngrok-free.app/addData', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   //   body: JSON.stringify(formData),
  //   // })
  //   fetch(
  //     "https://e6a8-2401-4900-1f38-3ef6-8c70-ff90-d08d-6e89.ngrok-free.app/addData",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response from the API (e.g., success or error messages)
  //       // console.log("inserted successFully");
  //       navigation.navigate('EmployeeDashboard');
  //       // data.json();
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error(error);
  //     });
  // };

  const handleFormSubmit =()=>{
    navigate('EmployeeDashboard');
  }
  return (
    <ScrollView>
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Product Loan</Text>
        <View style={styles.viewsty}>
          <TextInput
            placeholder="Product Loan"
            value={formData.Product_Loan}
            style={styles.txtinput}
            onChangeText={(text) => handleChange("Product_Loan", text)}
          />
        </View>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Bank Name</Text>
        <View style={styles.viewsty}>
        <TextInput
        placeholder="Bank Name"
        value={formData.Bank_Name}
        onChangeText={(text) => handleChange("Bank_Name", text)}
      />
        </View>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Customer Name</Text>
        <View style={styles.viewsty}>
        <TextInput
        placeholder="Customer Name"
        value={formData.Customer_Name}
        onChangeText={(text) => handleChange("Customer_Name", text)}
      />
        </View>
      </View>
      
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Father Name</Text>
        <View style={styles.viewsty}>
        <TextInput
        placeholder="Father Name"
        value={formData.Father_Name}
        onChangeText={(text) => handleChange("Father_Name", text)}
      />
        </View>
      </View>
      
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Mother Name</Text>
        <View style={styles.viewsty}>
        <TextInput
        placeholder="Mother Name"
        value={formData.Mother_Name}
        onChangeText={(text) => handleChange("Mother_Name", text)}
      />
        </View>
      </View>
      
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Mobile</Text>
        <View style={styles.viewsty}>
         
      <TextInput
      placeholder="Mobile"
      value={formData.Mobile}
      onChangeText={(text) => handleChange("Mobile", text)}
    />
        </View>
      </View>
      
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Personal Email</Text>
        <View style={styles.viewsty}>
        <TextInput
        placeholder="Personal Email"
        value={formData.Personal_Email}
        onChangeText={(text) => handleChange("Personal_Email", text)}
      />
        </View>
      </View>
      
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Pan Card</Text>
        <View style={styles.viewsty}>
        <TextInput
        placeholder="Pan Card"
        value={formData.Pan_Card}
        onChangeText={(text) => handleChange("Pan_Card", text)}
      />
        </View>
      </View>
      
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Customer Location</Text>
        <View style={styles.viewsty}>
        <TextInput
        placeholder="Customer Location"
        value={formData.Customer_Location}
        onChangeText={(text) => handleChange("Customer_Location", text)}
      />
        </View>
      </View>
      
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.textstyle}>Company Name</Text>
        <View style={styles.viewsty}>
        <TextInput
        placeholder="Company Name"
        value={formData.Company_Name}
        onChangeText={(text) => handleChange("Company_Name", text)}
      />
        </View>
      </View>
    
      <TextInput
        placeholder="Company Name"
        value={formData.Company_Name}
        onChangeText={(text) => handleChange("Company_Name", text)}
      />
      <TextInput
        placeholder="Dob"
        value={formData.Dob}
        onChangeText={(text) => handleChange("Dob", text)}
      />
      <TextInput
        placeholder="Login Date"
        value={formData.Login_Date}
        onChangeText={(text) => handleChange("Login_Date", text)}
      />
      <TextInput
        placeholder="Gender"
        value={formData.Gender}
        onChangeText={(text) => handleChange("Gender", text)}
      />
      <TextInput
        placeholder="Religion"
        value={formData.Religion}
        onChangeText={(text) => handleChange("Religion", text)}
      />
      <TextInput
        placeholder="Income Source"
        value={formData.Income_Source}
        onChangeText={(text) => handleChange("Income_Source", text)}
      />
      <TextInput
        placeholder="Marital Status"
        value={formData.Marital_Status}
        onChangeText={(text) => handleChange("Marital_Status", text)}
      />
      <TextInput
        placeholder="Spouse Name"
        value={formData.Spouse_Name}
        onChangeText={(text) => handleChange("Spouse_Name", text)}
      />
      <TextInput
        placeholder="Qualification"
        value={formData.Qualification}
        onChangeText={(text) => handleChange("Qualification", text)}
      />
      <TextInput
        placeholder="Property Status"
        value={formData.Property_Status}
        onChangeText={(text) => handleChange("Property_Status", text)}
      />
      <TextInput
        placeholder="Aadhar Card No"
        value={formData.Aadhar_Card_No}
        onChangeText={(text) => handleChange("Aadhar_Card_No", text)}
      />
      <TextInput
        placeholder="Current Address Line1"
        value={formData.Current_Address_Line1}
        onChangeText={(text) => handleChange("Current_Address_Line1", text)}
      />
      <TextInput
        placeholder="Current Address Line2"
        value={formData.Current_Address_Line2}
        onChangeText={(text) => handleChange("Current_Address_Line2", text)}
      />
      <TextInput
        placeholder="Current City"
        value={formData.Current_City}
        onChangeText={(text) => handleChange("Current_City", text)}
      />
      <TextInput
        placeholder="Current Landmark"
        value={formData.Current_Landmark}
        onChangeText={(text) => handleChange("Current_Landmark", text)}
      />
      <TextInput
        placeholder="Current State"
        value={formData.Current_State}
        onChangeText={(text) => handleChange("Current_State", text)}
      />
      <TextInput
        placeholder="Current Pin"
        value={formData.Current_Pin}
        onChangeText={(text) => handleChange("Current_Pin", text)}
      />
      <TextInput
        placeholder="Permanent Address Line1"
        value={formData.Permanent_Address_Line1}
        onChangeText={(text) => handleChange("Permanent_Address_Line1", text)}
      />
      <TextInput
        placeholder="Permanent Address Line2"
        value={formData.Permanent_Address_Line2}
        onChangeText={(text) => handleChange("Permanent_Address_Line2", text)}
      />
      <TextInput
        placeholder="Permanent City"
        value={formData.Permanent_City}
        onChangeText={(text) => handleChange("Permanent_City", text)}
      />
      <TextInput
        placeholder="Permanent Landmark"
        value={formData.Permanent_Landmark}
        onChangeText={(text) => handleChange("Permanent_Landmark", text)}
      />
      <TextInput
        placeholder="Permanent State"
        value={formData.Permanent_State}
        onChangeText={(text) => handleChange("Permanent_State", text)}
      />
      <TextInput
        placeholder="Permanent Pin"
        value={formData.Permanent_Pin}
        onChangeText={(text) => handleChange("Permanent_Pin", text)}
      />
      <TextInput
        placeholder="Designation"
        value={formData.Designation}
        onChangeText={(text) => handleChange("Designation", text)}
      />
      <TextInput
        placeholder="Current Company Work Experience"
        value={formData.Current_Company_Work_Experience}
        onChangeText={(text) =>
          handleChange("Current_Company_Work_Experience", text)
        }
      />
      <TextInput
        placeholder="Total Work Experience"
        value={formData.Total_Work_Experience}
        onChangeText={(text) => handleChange("Total_Work_Experience", text)}
      />
      <TextInput
        placeholder="Company Type"
        value={formData.Company_Type}
        onChangeText={(text) => handleChange("Company_Type", text)}
      />
      <TextInput
        placeholder="Official Mail"
        value={formData.Official_Mail}
        onChangeText={(text) => handleChange("Official_Mail", text)}
      />
      <TextInput
        placeholder="Company Address"
        value={formData.Company_Address}
        onChangeText={(text) => handleChange("Company_Address", text)}
      />
      <TextInput
        placeholder="Company City"
        value={formData.Company_City}
        onChangeText={(text) => handleChange("Company_City", text)}
      />
      <TextInput
        placeholder="Company State"
        value={formData.Company_State}
        onChangeText={(text) => handleChange("Company_State", text)}
      />
      <TextInput
        placeholder="Company Pin"
        value={formData.Company_Pin}
        onChangeText={(text) => handleChange("Company_Pin", text)}
      />
      <TextInput
        placeholder="Salary Account BankName"
        value={formData.Salary_Account_BankName}
        onChangeText={(text) => handleChange("Salary_Account_BankName", text)}
      />
      <TextInput
        placeholder="Annual Ctc"
        value={formData.Annual_Ctc}
        onChangeText={(text) => handleChange("Annual_Ctc", text)}
      />
      <TextInput
        placeholder="Net Salary"
        value={formData.Net_Salary}
        onChangeText={(text) => handleChange("Net_Salary", text)}
      />
      <TextInput
        placeholder="Obligations"
        value={formData.Obligations}
        onChangeText={(text) => handleChange("Obligations", text)}
      />
      <TextInput
        placeholder="Scheme Offered"
        value={formData.Scheme_Offered}
        onChangeText={(text) => handleChange("Scheme_Offered", text)}
      />
      <TextInput
        placeholder="Loan Amount Applied"
        value={formData.Loan_Amount_Applied}
        onChangeText={(text) => handleChange("Loan_Amount_Applied", text)}
      />
      <TextInput
        placeholder="Tenure Of Loan"
        value={formData.Tenure_Of_Loan}
        onChangeText={(text) => handleChange("Tenure_Of_Loan", text)}
      />
      <TextInput
        placeholder="Credit Card Obligation"
        value={formData.Credit_Card_Obligation}
        onChangeText={(text) => handleChange("Credit_Card_Obligation", text)}
      />
      <TextInput
        placeholder="Reference1 Full Name Relative"
        value={formData.Reference1_FullName_Relative}
        onChangeText={(text) =>
          handleChange("Reference1_FullName_Relative", text)
        }
      />
      <TextInput
        placeholder="Reference1 MobileNo"
        value={formData.Reference1_MobileNo}
        onChangeText={(text) => handleChange("Reference1_MobileNo", text)}
      />
      <TextInput
        placeholder="Reference1 Address1"
        value={formData.Reference1_Address1}
        onChangeText={(text) => handleChange("Reference1_Address1", text)}
      />
      <TextInput
        placeholder="Reference1 City"
        value={formData.Reference1_City}
        onChangeText={(text) => handleChange("Reference1_City", text)}
      />
      <TextInput
        placeholder="Reference1 State"
        value={formData.Reference1_State}
        onChangeText={(text) => handleChange("Reference1_State", text)}
      />
      <TextInput
        placeholder="Reference1 Pin"
        value={formData.Reference1_Pin}
        onChangeText={(text) => handleChange("Reference1_Pin", text)}
      />
      <TextInput
        placeholder="Reference2 Full Name Friend"
        value={formData.Reference2_FullName_Friend}
        onChangeText={(text) =>
          handleChange("Reference2_FullName_Friend", text)
        }
      />
      <TextInput
        placeholder="Reference2 MobileNo"
        value={formData.Reference2_MobileNo}
        onChangeText={(text) => handleChange("Reference2_MobileNo", text)}
      />
      <TextInput
        placeholder="Reference2 Address1"
        value={formData.Reference2_Address1}
        onChangeText={(text) => handleChange("Reference2_Address1", text)}
      />
      <TextInput
        placeholder="Reference2 City"
        value={formData.Reference2_City}
        onChangeText={(text) => handleChange("Reference2_City", text)}
      />
      <TextInput
        placeholder="Reference2 State"
        value={formData.Reference2_State}
        onChangeText={(text) => handleChange("Reference2_State", text)}
      />
      <TextInput
        placeholder="Reference2 Pin"
        value={formData.Reference2_Pin}
        onChangeText={(text) => handleChange("Reference2_Pin", text)}
      />
      <TextInput
        placeholder="Caller Name"
        value={formData.Caller_Name}
        onChangeText={(text) => handleChange("Caller_Name", text)}
      />
      <TextInput
        placeholder="TL Name"
        value={formData.TL_Name}
        onChangeText={(text) => handleChange("TL_Name", text)}
      />
      <TextInput
        placeholder="Manager Name"
        value={formData.Manager_Name}
        onChangeText={(text) => handleChange("Manager_Name", text)}
      />
      <TextInput
        placeholder="Disbursal BankName"
        value={formData.Disbursal_BankName}
        onChangeText={(text) => handleChange("Disbursal_BankName", text)}
      />
      <TextInput
        placeholder="Loan Application No"
        value={formData.Loan_Application_No}
        onChangeText={(text) => handleChange("Loan_Application_No", text)}
      />
      <TextInput
        placeholder="Approved Amount"
        value={formData.Approved_Amount}
        onChangeText={(text) => handleChange("Approved_Amount", text)}
      />
      <TextInput
        placeholder="Disbursal Loan Amount"
        value={formData.Disbursal_Loan_Amount}
        onChangeText={(text) => handleChange("Disbursal_Loan_Amount", text)}
      />
      <TextInput
        placeholder="Inhand Disb Account"
        value={formData.Inhand_Disb_Account}
        onChangeText={(text) => handleChange("Inhand_Disb_Account", text)}
      />
      <TextInput
        placeholder="Bt Disb Amount"
        value={formData.Bt_Disb_Amount}
        onChangeText={(text) => handleChange("Bt_Disb_Amount", text)}
      />
      <TextInput
        placeholder="Top Up"
        value={formData.Top_Up}
        onChangeText={(text) => handleChange("Top_Up", text)}
      />
      <TextInput
        placeholder="Cibil"
        value={formData.Cibil}
        onChangeText={(text) => handleChange("Cibil", text)}
      />
      <TextInput
        placeholder="Tenure Disbursal"
        value={formData.Tenure_Disbursal}
        onChangeText={(text) => handleChange("Tenure_Disbursal", text)}
      />
      <TextInput
        placeholder="Roi"
        value={formData.Roi}
        onChangeText={(text) => handleChange("Roi", text)}
      />
      <TextInput
        placeholder="Pf"
        value={formData.Pf}
        onChangeText={(text) => handleChange("Pf", text)}
      />
      <TextInput
        placeholder="Insurance"
        value={formData.Insurance}
        onChangeText={(text) => handleChange("Insurance", text)}
      />
      <TextInput
        placeholder="Emi"
        value={formData.Emi}
        onChangeText={(text) => handleChange("Emi", text)}
      />
      <TextInput
        placeholder="First Emi Date"
        value={formData.First_Emi_Date}
        onChangeText={(text) => handleChange("First_Emi_Date", text)}
      />
      <TextInput
        placeholder="Disb Status"
        value={formData.Disb_Status}
        onChangeText={(text) => handleChange("Disb_Status", text)}
      />
      <TextInput
        placeholder="Login Bank"
        value={formData.Login_Bank}
        onChangeText={(text) => handleChange("Login_Bank", text)}
      />
      <TextInput
        placeholder="Disbursal Date"
        value={formData.Disbursal_Date}
        onChangeText={(text) => handleChange("Disbursal_Date", text)}
      />
      <TextInput
        placeholder="Dsa Channel Name"
        value={formData.Dsa_Channel_Name}
        onChangeText={(text) => handleChange("Dsa_Channel_Name", text)}
      />
      <TextInput
        placeholder="Not Disburs Reason"
        value={formData.Not_Disburs_Reason}
        onChangeText={(text) => handleChange("Not_Disburs_Reason", text)}
      />
      <TextInput
        placeholder="Not Disburs Remark"
        value={formData.Not_Disburs_Remark}
        onChangeText={(text) => handleChange("Not_Disburs_Remark", text)}
      />
      <TextInput
        placeholder="Rejection Remark"
        value={formData.Rejection_Remark}
        onChangeText={(text) => handleChange("Rejection_Remark", text)}
      />
      <TextInput
        placeholder="Description"
        value={formData.Description}
        onChangeText={(text) => handleChange("Description", text)}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </ScrollView>
  );
}

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
    color: COLORS.black,
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
