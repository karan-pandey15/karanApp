
import React from 'react';
import { View, FlatList } from 'react-native';
import Card from './Card';

import Testimonial from './Testimonial'

const data = [
  {
    id: '1',
    // imageSource: require('.././assets/plo.png'), // Replace with your image sources
    text: 'Personal Loan',
  },
  {
    id: '2',
    // imageSource: require('.././assets/c.png'),
    text: 'Credit Card',
  },
  {
    id: '3',
    // imageSource: require('.././assets/home.png'),
    text: 'Home Loan ',
  },
  {
    id: '4',
    // imageSource: require('.././assets/buis.png'),
    text: 'Business Loan',
  },
];

export default function Home() {

  
  return (
    // <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
        
    <View>
      <Testimonial 
      // imageSource={require('.././assets/karan.jpg')}
      name="Karan"
      position="developer"
      pan="BC15.....24"
      />
      
      <FlatList
      data={data}
      numColumns={1} // Display two cards per row
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          imageSource={item.imageSource}
          text={item.text}
        />
      )}
    />
    </View>
  )
}