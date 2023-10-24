import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import axios from 'axios';

const ApprovalModal = ({ data, onClose, onApprove, onReject }) => {
  const [approved, setApproved] = useState(false);
  const [approvedData, setApprovedData] = useState({
    name: data.Customer_Name || '',
    fatherName: data.Father_Name || '',
    phoneNo: data.Mobile || '',
    appliedBank: data.appliedBank || 'HDFC BANK',
    panNo: data.Pan_Card || '',
    companyName: data.Company_Name || '',
  });

  const handleApprove = () => {
    // Make a POST request to the Node.js server to insert data
    axios.post('https://1589-2401-4900-1c5a-9e08-db6-b77b-ffe2-9de9.ngrok-free.app/insert', approvedData)
      .then((response) => {
        console.log(response.data);
        onApprove(approvedData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.modalContainer}>
      <View>
      <Text style={styles.textField}>Name:</Text>
        <TextInput style={styles.inputField} value={approvedData.name}></TextInput>
        <TextInput style={styles.inputField} value={approvedData.fatherName}></TextInput>
        <TextInput style={styles.inputField} value={approvedData.phoneNo}></TextInput>
        <TextInput style={styles.inputField} value={approvedData.appliedBank}></TextInput>
        <TextInput style={styles.inputField} value={approvedData.companyName}></TextInput>

          <Text style={{color:'red',fontSize:10}}>Fill The Blank Field And Submit The Form</Text>

          <Text style={{marginTop:20}}>Loan Amount:</Text>
          
            <TextInput
            style={styles.inputField}
              placeholder=""
              onChangeText={(text) =>
                setApprovedData({ ...approvedData, additionalInfo1: text })
              }
            />
            <Text>Loan Application No:</Text>
            <TextInput
            style={styles.inputField}
              placeholder=""
              onChangeText={(text) =>
                setApprovedData({ ...approvedData, additionalInfo2: text })
              }
            />
          </View>

        <View style={styles.buttonContainer}>
        <Button title="IfApproved" onPress={handleApprove} />
          <Button title="Reject" onPress={onReject} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 0,
  },
  inputField:{
    marginBottom:10,
    marginTop:10,
    borderWidth:1,
    width:300,
    padding:10,
    borderRadius:8
  },
});

export default ApprovalModal;
