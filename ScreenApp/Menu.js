import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

import { Home, Cart, Loan, Settings, Addlead } from "./screens";

const Tab = createBottomTabNavigator();

const Sidebar = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://5688-2401-4900-1c5b-6a4c-7051-b9e9-f3ef-420.ngrok-free.app/users"
      )
      .then((response) => {
        setUserData(response.data);
      });
  }, []);

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      backgroundColor: "#fff",
    },
  };

  return (
    <View style={styles.sidebarContainer}>
      <View style={styles.userProfile}>
        <Image
          source={require("../assets/emp.png")}
          style={styles.profileImage}
        />
        {userData.map((data) => (
          <View key={data.id} style={styles.userDataContainer}>
          </View>
          ))}
          <Text style={styles.username}>Welcome! Karan </Text>
      </View>

      <View></View>
      <View style={styles.navcontainer}>
        <Text style={styles.textfield}> Loan Terms</Text>
      <Text style={styles.textfield}>Share Your Frind</Text>
      <Text style={styles.textfield}>Help & Support</Text>
        <Text style={styles.textfield}>Share Your Frind</Text>
        <Text style={styles.textfield}>Help & Support</Text>
        <Text style={styles.textfield}>Knowledge Centre</Text>
        <Text style={styles.textfield}>Help & Support</Text>

      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logouts</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Menu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      backgroundColor: "#fff",
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/icons/addrup-removebg-preview.png")} // Use the path to your image
          style={{ width: 210, height: 60, marginTop: 20, marginBottom: 20 }} // Set the desired width and height
        />
      </View>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "#F7F29B" : "#036E8C"}
                />
                <Text style={{ fontSize: 12, color: "#16247d" }}>HOME</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignments: "center", justifyContent: "center" }}>
                <Entypo
                  name="wallet"
                  size={24}
                  color={focused ? "#F7F29B" : "#036E8C"}
                />
                <Text style={{ fontSize: 12, color: "#16247d" }}>Cart</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Addlead"
          component={Addlead}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.transactionButton}>
                <FontAwesome
                  name="exchange"
                  size={24}
                  color={focused ? "#F7F29B" : "#fff"}
                />
                <Text style={{ fontSize: 12, color: "#fff" }}>Add</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Loan"
          component={Loan}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="stacked-line-chart"
                  size={24}
                  color={focused ? "#F7F29B" : "#036E8C"}
                />
                <Text style={{ fontSize: 12, color: "#036E8C" }}>Loans</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="stacked-line-chart"
                  size={24}
                  color={focused ? "#F7F29B" : "#036E8C"}
                />
                <Text style={{ fontSize: 12, color: "#16247d" }}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.roundButton} onPress={toggleSidebar}>
        <FontAwesome name="bars" size={24} color="#036E8C" />
      </TouchableOpacity>
      {sidebarOpen && <Sidebar />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  textfield:{
    marginBottom:20,
    marginTop:25,
    fontSize:16,
    color:'#fff'
  },
  header: {
    justifyContent: "center",
    alignItems: "center",

  },
  logotext: {
    textAlign: "center",
    marginTop: 25,
    color: "#036E8C",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  roundButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    zIndex: 2,
  },
  sidebarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "70%",
    backgroundColor: "#036E8C",
    boxShadow: "5px 0px 5px rgba(0, 0, 0, 0.5)",
  },
  userProfile: {
    padding: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  logoutButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "#fff",
    width: "80%",
    padding: 10,
    borderRadius: 10,
  },
  transactionButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#036E8C",
    width: Platform.OS == "ios" ? 50 : 60,
    height: Platform.OS == "ios" ? 50 : 60,
    top: Platform.OS == "ios" ? -10 : -20,
    borderRadius: Platform.OS == "ios" ? 25 : 30,
  },
  logoutText: {
    textAlign: "center",
    color: "#036E8C",
    fontWeight: "bold",
  },
  navcontainer: {
    width: "80%",
    alignItems: "center",
  },
});
