import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import ApprovalModal from './ApprovalModal';

const Pendingdata = () => {
  const [pendingData, setPendingData] = useState([]);

  
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openApprovalModal = (data) => {
    setSelectedData(data);
    setShowApprovalModal(true);
  };

  const closeApprovalModal = () => {
    setShowApprovalModal(false);
  };

  const approveData = (approvedData) => {
    // Handle the approved data here, e.g., send it to Approveddata
    console.log('Data Approved:', approvedData);
    // You can make an API call to save the data here
    // ...
    // Close the modal
    closeApprovalModal();
  };

  const rejectData = () => {
    // Handle data rejection here
    // Close the modal
    closeApprovalModal();
  };

  const fetchPendingData = async () => {
    try {
      let data = await fetch('https://1589-2401-4900-1c5a-9e08-db6-b77b-ffe2-9de9.ngrok-free.app/getalldata');
      let result = await data.json();
      setPendingData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = async (id)=>{
    const url = 'https://1589-2401-4900-1c5a-9e08-db6-b77b-ffe2-9de9.ngrok-free.app/deleteuser';
    console.log(`${url}/${id} it is update`);
    let result = await fetch(`${url}/${id}`,{
      method:"delete", 
    });
    result = await result.json();
    if(result){
      console.log('user deleted.')
      fetchPendingData();
    }
  }

  useEffect(() => {
    fetchPendingData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <ScrollView>
          <View>
            {/* Table Headers */}
            <View style={styles.row}>
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Name</Text>
              </View>
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Father Name</Text>
              </View>
       
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Phone No</Text>
              </View>
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Applied Bank Name</Text>
              </View>
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Pan No</Text>
              </View>
          
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Company Name</Text>
              </View>

              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Status</Text>
              </View>

              
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Delete</Text>
              </View>
            </View>

            {/* Table Data */}
            {pendingData.map((item, index) => (
              <View key={index} style={styles.row}>
                <View style={styles.cell}>
                  <Text>{item.Customer_Name || 'Oops, no data'}</Text>
                </View>
                <View style={styles.cell}>
                  <Text>{item.Father_Name || 'Oops, no data'}</Text>
                </View>
                
                <View style={styles.cell}>
                  <Text>{item.Mobile || 'Oops, no data'}</Text>
                </View>
                <View style={styles.cell}>
                  <Text>{item.appliedBank || 'HDFC BANK'}</Text>
                </View>
                <View style={styles.cell}>
                  <Text>{item.Pan_Card || 'Oops, no data'}</Text>
                </View>
              
                <View style={styles.cell}>
                  <Text>{item.Company_Name || 'Oops, no data'}</Text>
                </View>


                <View style={styles.cell}>
                  <Text>{<Button title='pending' /> || 'Oops, no data'}</Text>
                </View>

                <View style={styles.cell}>
                <Button title="Update" onPress={() => openApprovalModal(item)} />
              </View>
              </View>
            ))}
            {showApprovalModal && (
              <ApprovalModal
                data={selectedData}
                onClose={closeApprovalModal}
                onApprove={approveData}
                onReject={rejectData}
              />
            )}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100, // Margin from the top
    marginLeft: 15, // Margin from the left
    marginRight: 15, // Margin from the right
    marginBottom: 20, // Margin from the bottom
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5, // Add margin between cells
    
    width:100
  },
  headerCell: {
    width:120,
    fontSize:20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize:15
  },
});

export default Pendingdata;
