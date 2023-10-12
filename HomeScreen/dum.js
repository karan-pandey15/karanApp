// App.js

import React from 'react';
import { View, ScrollView } from 'react-native';
import Card from './Card';


const data = [
  {
    id: '1',
    imageSource: require('./images/image1.jpg'), // Replace with your image sources
    text: 'Card 1',
  },
  {
    id: '2',
    imageSource: require('./images/image2.jpg'),
    text: 'Card 2',
  },
  {
    id: '3',
    imageSource: require('./images/image3.jpg'),
    text: 'Card 3',
  },
  {
    id: '4',
    imageSource: require('./images/image4.jpg'),
    text: 'Card 4',
  },
];

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <Card
            key={item.id}
            imageSource={item.imageSource}
            text={item.text}
          />
        ))}
      </ScrollView>
    </View>
  );
}
