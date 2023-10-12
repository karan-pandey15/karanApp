// import React from 'react';
// import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

// const data = [
//   { id: '1', image: require('../assets/axis.png'), text: 'Axis Bank' },
//   { id: '2', image: require('../assets/icici.webp'), text: 'ICICI Bank' },
//   { id: '3', image: require('../assets/kotak.png'), text: 'Kotak mahindra bank' },
//   { id: '4', image: require('../assets/idfc.png'), text: 'IDFC bank' },
//   { id: '5', image: require('../assets/hdfc.png'), text: ' HDFC Bank ' },
//   { id: '6', image: require('../assets/finnabel.png'), text: 'Finnable Finance ' },
//   { id: '7', image: require('../assets/bajaj.webp'), text: 'Bajaj Finance ' },
// ];

// const ListItem = ({ item }) => (
//   <View style={styles.item}>
//     <Image source={item.image} style={styles.image} />
//     <Text style={styles.text}>{item.text}</Text>
//   </View>
// );

// const BankList = () => (
//   <FlatList
//     data={data}
//     renderItem={({ item }) => <ListItem item={item} />}
//     keyExtractor={(item) => item.id}
//   />
// );

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:'space-between',
//     margin: 10,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#f0f0f0',
//   },
//   image: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//     borderRadius: 25, // To make the image circular
//   },
//   text: {
//     fontSize: 16,
//   },
// });

// export default BankList;


import React from 'react'
import { Text } from 'react-native'

export default function BankList() {
  return (
    <Text>BankList</Text>
  )
}
