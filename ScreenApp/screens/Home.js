import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const jsonData = [
  { image: require("../../assets/card.png"), text: "Credit Card" },
  { image:require("../../assets/hh.png"), text: "L&T Personal Loan" },
];
let loanImg = require("../../assets/hh.png")
let cardImg = require("../../assets/card.png")
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate("Loan")}
  >
    <Image source={loanImg} style={styles.image} />
    <Text style={styles.text}>Loan</Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate("Cart")}
>
  <Image source={cardImg} style={styles.image} />
  <Text style={styles.text}>Credit Cart</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80, // Margin from the top
    justifyContent: "center",
    alignItems:"center"
  },
  card: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  text: {
    textAlign: "center",
  },
});

export default Home;
