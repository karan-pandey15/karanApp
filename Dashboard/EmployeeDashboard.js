import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import Button from '../components/Button';

const EmployeeDashboard = ({navigation}) => {
    const [allData,setData] = useState([]);
  

    const fetchAlldata = async()=>{
        let data = await fetch("https://1586-2401-4900-1f38-3ef6-8c70-ff90-d08d-6e89.ngrok-free.app/getalldata");
        result = await data.json();
        setData(result)
    }

     useEffect(()=>{
        fetchAlldata();
    },[]);

  return (
    <ScrollView>
    <View style={styles.mainContainer}>
    <Text style={styles.Dashboard}>Loan </Text>
      <View style={styles.rowContainer}>
        <View style={[styles.container, { backgroundColor: 'rgb(23,162,184)' }]}>
        
                <Text style={styles.number}>{allData.length}</Text>
             
        
          <Text style={styles.text}>Login leads data</Text>
          <TouchableOpacity style={styles.button}>
            {/* Add your arrow icon here */}
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pendingdata')} >
        <View style={[styles.container, { backgroundColor: '#FFC107' }]} 
        >
          <Text style={styles.number}>{allData.length}</Text>
          <Text style={styles.text}>Pending leads</Text>
            {/* Add your arrow icon here */}
            </View>
            </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.container, { backgroundColor: 'rgb(40,167,69)' }]}>
          <Text style={styles.number}>{0}</Text>
          <Text style={styles.text}>Disbursal leads</Text>
          <TouchableOpacity style={styles.button}>
            {/* Add your arrow icon here */}
          </TouchableOpacity>
        </View>
        <View style={[styles.container, { backgroundColor: 'rgb(220,53,69)' }]}>
          <Text style={styles.number}>{0}</Text>
          <Text style={styles.text}>Rejected leads</Text>
          <TouchableOpacity style={styles.button}>
            {/* Add your arrow icon here */}
          </TouchableOpacity>
        </View>
      </View>


      <Text style={styles.Dashboard}>Credit Card</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.container, { backgroundColor: 'rgb(23,162,184)' }]}>
          <Text style={styles.number}>{0}</Text>
          <Text style={styles.text}>Login leads</Text>
          <TouchableOpacity style={styles.button}>
            {/* Add your arrow icon here */}
          </TouchableOpacity>
        </View>
        <View style={[styles.container, { backgroundColor: '#FFC107' }]}>
          <Text style={styles.number}>{0}</Text>
          <Text style={styles.text}>Pending leads</Text>
          <TouchableOpacity style={styles.button}>
            {/* Add your arrow icon here */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.container, { backgroundColor: 'rgb(40,167,69)' }]}>
          <Text style={styles.number}>{0}</Text>
          <Text style={styles.text}>Disbursal leads</Text>
          <TouchableOpacity style={styles.button}>
            {/* Add your arrow icon here */}
          </TouchableOpacity>
        </View>
        <View style={[styles.container, { backgroundColor: 'rgb(220,53,69)' }]}>
          <Text style={styles.number}>{0}</Text>
          <Text style={styles.text}>Rejected leads</Text>
          <TouchableOpacity style={styles.button}>
            {/* Add your arrow icon here */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
   
    marginTop: 120,
    marginHorizontal: 30,
    
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  container: {
    width: 150,
    height: 150,
    backgroundColor: 'white', // Default background color
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight:'500',
    color:'white',
    
  },
  text: {
    fontSize: 16,
    marginBottom: 45,
    color:'white',
    fontWeight:'bold'
  },
  button: {
    backgroundColor: 'transparent', // You can set your own button styles
  },
  Dashboard:{
      fontSize:26,
      marginBottom:10,
      fontWeight:'bold',

  }
});

export default EmployeeDashboard;
