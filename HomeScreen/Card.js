// Card.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Card = ({ imageSource, text, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };
const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    marginTop:30,
    marginLeft:25
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Card;
