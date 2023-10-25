import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
// import Button from '../components/Button';

const EmployeeDashboard = ({navigation}) => {
    const [allData,setData] = useState([]);
    const [approvedData,setApprovedData] = useState([]);
    const [rejectData,setRejectedData] = useState([])
  

    const fetchAlldata = async()=>{
        let data = await fetch("https://7e83-2401-4900-1c5a-9e08-1150-92d0-4989-43f2.ngrok-free.app/getalldata");
        result = await data.json();
        setData(result)
    }

    const fetchDisbursaldata = async()=>{
      let data = await fetch("https://7e83-2401-4900-1c5a-9e08-1150-92d0-4989-43f2.ngrok-free.app/approvedata");
      result = await data.json();
      setApprovedData(result)
  }

  const fetchRejecteddata = async()=>{
    let data = await fetch("https://7e83-2401-4900-1c5a-9e08-1150-92d0-4989-43f2.ngrok-free.app/rejectdata");
    result = await data.json();
    setRejectedData(result)
}

     useEffect(()=>{
        fetchAlldata();
        fetchDisbursaldata();
        fetchRejecteddata();
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
          
            </View>

            </TouchableOpacity>
      </View>
      

      
      <View style={styles.rowContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Disbursaldata')} >
        <View style={[styles.container, { backgroundColor: 'rgb(40,167,69)' }]}>
          <Text style={styles.number}>{approvedData.length}</Text>
          <Text style={styles.text}>Disbursal leads</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Rejecteddata')} >
            <View style={[styles.container, { backgroundColor: 'rgb(220,53,69)' }]}>
            <Text style={styles.number}>{rejectData.length}</Text>
            <Text style={styles.text}>Rejected leads</Text>
            <TouchableOpacity style={styles.button}>
              {/* Add your arrow icon here */}
            </TouchableOpacity>
          </View>
            </TouchableOpacity>
            
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
