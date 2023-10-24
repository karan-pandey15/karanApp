
import React from 'react';
import { View, FlatList ,Image,StyleSheet} from 'react-native';
import Auth from './Auth';

const data = [
  {
    id: '1',
    imageSource: require('../assets/cu.png'),
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
   <View style={styles.imageContainer} >
   <Image
   source={require('../assets/icons/user-removebg-preview.png')} // Use the path to your image
   style={{ width: 90, height: 90, marginTop:20,marginBottom:20}} // Set the desired width and height
 />
   </View>
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

const styles = StyleSheet.create({
    imageContainer:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingTop: 40,
      backgroundColor: "rgb(3,110,140)",
    }
});