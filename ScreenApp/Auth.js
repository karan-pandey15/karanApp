import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Auth = ({ imageSource, text ,navigation }) => {
    const handleCardPress = () => {
        // Navigate to the desired screen when a card is clicked
        // navigation.navigate('Verification'); // Replace 'TargetScreen' with the name of your target screen
        switch (text) {
            case 'Started as Customer':
              navigation.navigate('Customer'); // Navigate to the CustomerScreen
              break;
            case 'Employee':
              navigation.navigate('Employee'); // Navigate to the EmployeeScreen
              break;
            case 'Partner':
              navigation.navigate('Partner'); // Navigate to the PartnerScreen
              break;
            default:
              break;
          }
      };

    return (
    <View style={styles.body}>
    <TouchableOpacity onPress={handleCardPress} style={styles.card}
    
    >
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
    
  </TouchableOpacity>
    </View>
    );
  };
const styles = StyleSheet.create({
    body:{

    },
  card: {
    width: 300,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    marginTop:60,
    alignItems:'center',
    marginLeft:35 ,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    marginLeft:5,
    marginRight:5
  },
});

export default Auth;
