

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";

const ApprovalModal = ({ data, onClose, onApprove, onReject }) => {
  const [approved, setApproved] = useState(false);
  const [showApprovedContainer, setShowApprovedContainer] = useState(false);
  const [showRejectContainer, setShowRejectContainer] = useState(false);
  const [approvedData, setApprovedData] = useState({
    name: data.Customer_Name || "",
    fatherName: data.Father_Name || "",
    phoneNo: data.Mobile || "",
    appliedBank: data.appliedBank || "HDFC BANK",
    panNo: data.Pan_Card || "",
    companyName: data.Company_Name || "",
  });

  const handleApprove = () => {
    // Make a POST request to the Node.js server to insert data
    axios
      .post(
        "https://7e83-2401-4900-1c5a-9e08-1150-92d0-4989-43f2.ngrok-free.app/insert",
        approvedData
      )
      .then((response) => {
        console.log(response.data);
        onApprove(approvedData);
      })
      .catch((error) => {
        console.error(error);
      });
    setShowApprovedContainer(true);
  };

  const handleReject = () => {
    // setShowRejectContainer(true);
    axios
    .post(
      "https://7e83-2401-4900-1c5a-9e08-1150-92d0-4989-43f2.ngrok-free.app/rejectinsert",
      approvedData
    )
    .then((response) => {
      console.log(response.data);
      onApprove(approvedData);
    })
    .catch((error) => {
      console.error(error);
    });
  setShowApprovedContainer(true);

  };



  return (
    <ScrollView>
      <Modal visible={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.textField}>Name:</Text>
            {/* ...other fields */}
            <TextInput
              style={styles.inputField}
              value={approvedData.name}
            ></TextInput>
            <TextInput
              style={styles.inputField}
              value={approvedData.fatherName}
            ></TextInput>
            <TextInput
              style={styles.inputField}
              value={approvedData.phoneNo}
            ></TextInput>
            <TextInput
              style={styles.inputField}
              value={approvedData.appliedBank}
            ></TextInput>
            <TextInput
              style={styles.inputField}
              value={approvedData.companyName}
            ></TextInput>

            {showApprovedContainer && (
              <View style={styles.approvedContainer}>
                <Text style={{ color: "red", fontSize: 10 }}>
                  Fill The Blank Field And Submit The Approved Form
                </Text>
                <Text style={{ marginTop: 20 }}>Loan Amount:</Text>

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
              <Button title="Submit" onPress={handleApprove} />
              </View>
            )}

            {showRejectContainer && (
              <View style={styles.rejectContainer}>
                <Text style={{ color: "red", fontSize: 10 }}>
                  Fill The Blank Field And Submit The Rejected Form
                </Text>
                <Text style={{ marginTop: 20 }}>Rejected Reason:</Text>

                <TextInput
                  style={styles.inputField}
                  placeholder=""
                  onChangeText={(text) =>
                    setApprovedData({ ...approvedData, additionalInfo1: text })
                  }
                />
                <Text>Reject Date:</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder=""
                  onChangeText={(text) =>
                    setApprovedData({ ...approvedData, additionalInfo2: text })
                  }
                />
                <Button title="Submit" onPress={handleReject} />
              </View>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="IfApproved"
              onPress={() => {
                setShowApprovedContainer(true);
                setShowRejectContainer(false);
              }}
            />
            <Button
              title="Reject"
              onPress={() => {
                setShowApprovedContainer(false);
                setShowRejectContainer(true);
              }}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 0,
  },
  inputField: {
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    width: 300,
    padding: 10,
    borderRadius: 8,
  },
  // Define other styles here
});

export default ApprovalModal;
