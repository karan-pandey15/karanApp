import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Testimonial = ({ imageSource, name, position, pan }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Position:</Text>
          <Text style={styles.info}>{position}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>PAN:</Text> 
          <Text style={styles.info}>{pan}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#036E8C",
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width:80,
    height: 80,
    borderRadius: 50,
    margin: 10,
  },
  infoContainer: {
    flex: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Add gap from bottom
  },
  label: {
    width: 80, // Set a fixed width for the labels
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  info: {
    flex: 1, // Make the info text expand to fill available space
    fontSize: 16, // Same font size as the label
    color: 'white',
  },
});

export default Testimonial;
