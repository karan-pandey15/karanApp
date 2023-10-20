import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Pendingdata = () => {
  const [pendingData, setPendingData] = useState([]);

  const fetchPendingData = async () => {
    try {
      let data = await fetch('https://1586-2401-4900-1f38-3ef6-8c70-ff90-d08d-6e89.ngrok-free.app/getalldata');
      let result = await data.json();
      setPendingData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
              </View>
            ))}
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
