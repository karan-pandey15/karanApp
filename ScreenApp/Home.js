
import React from 'react';
import { View, FlatList } from 'react-native';
import Auth from './Auth';

const data = [
  {
    id: '1',
    imageSource: require('../assets/cu.png'), // Replace with your image sources
    text: 'Started as Customer',
    gonext:''

  },
  {
    id: '2',
    imageSource: require('../assets/emp.png'),
    text: 'Employee',
    gonext:''
    
  },
  {
    id: '3',
    imageSource: require('../assets/par.png'),
    text: 'Partner',
    gonext:''
    
  },
];

export default function Home({navigation}) {

    const { navigate } = navigation;

  
  return (
    // <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
        
    <View style={{ flex: 1, backgroundColor: '#036E8C' }}>
      <FlatList
      data={data}
    //   numColumns={1} // Display two cards per row
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Auth
          imageSource={item.imageSource}
          text={item.text}
        //   gonext={item.gonext}
        navigation={navigation}
        />
      )}
    />
    </View>
  )
}