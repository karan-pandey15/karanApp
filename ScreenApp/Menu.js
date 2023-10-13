import {  Text, Platform,  View } from 'react-native';
import { Home, Portfolio, Prices, Settings, Transaction } from "./screens";
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Thanks for watching
const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function Menu() {
  return (
    //  <NavigationContainer>
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#F7F29B": "#036E8C"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Portfolio" 
          component={Portfolio} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="wallet" size={24} color={focused ? "#F7F29B": "#036E8C"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Cart</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Transaction" 
          component={Transaction} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#036E8C",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <FontAwesome name="exchange" size={24}  color={focused ? "#F7F29B": "#fff"}/>
                  <Text style={{fontSize: 12, color: "#fff"}}>Add</Text>
                </View>
              )
            }
           }}
          />
          <Tab.Screen
           name="Prices" 
           component={Prices}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <MaterialIcons name="stacked-line-chart" size={24} color={focused ? "#F7F29B": "#036E8C"} />
                  <Text style={{fontSize: 12, color: "#036E8C"}}>Loans</Text>
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <MaterialIcons name="stacked-line-chart" size={24} color={focused ? "#F7F29B": "#036E8C"} />
                 
                  <Text style={{fontSize: 12, color: "#16247d"}}>Profile</Text>
            </View>
              )
            }
          }}
          />
       </Tab.Navigator>
    //  </NavigationContainer>
)
}
