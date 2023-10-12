// import React from 'react'
// import { Button, Text } from 'react-native'
// import { View } from 'react-native-animatable'
// import Home from '../../HomeScreen/Home'


// function Employee() {
//   return (
//     <View>
//     <Text>Hello From The Employee Page data</Text>
   
//     </View>

//   )
// }

// export default Employee

import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Employee() {
  const navigation = useNavigation();

  const goToHome = () => {
    // Replace 'Home' with the name of the screen where you want to navigate.
    // navigation.navigate('Menu');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello From The Employee Page data</Text>
      <Button
        title="Go to Home"
        onPress={goToHome}
        color="blue" // Set the background color to blue
      />
    </View>
  );
}

export default Employee;
