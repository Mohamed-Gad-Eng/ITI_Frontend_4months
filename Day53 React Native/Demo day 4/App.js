// import { Image, ScrollView, StatusBar, Switch, Text, View } from 'react-native';
// import './global.css';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Home from 'screens/Home';
// import AboutUs from 'screens/AboutUs';
// import ContactUs from 'screens/ContactUs';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Users from 'screens/Users';
// import UserDetails from 'screens/UserDetails';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AntDesign from '@expo/vector-icons/AntDesign';

// var Stack = createNativeStackNavigator();
// var Bottom = createBottomTabNavigator();

// function bottomTabs() {
//   return (
//     <Bottom.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold' },
//         tabBarActiveTintColor: 'red',
//         tabBarInactiveTintColor: 'black',
//         tabBarStyle: {
//           paddingBottom: 5,
//           borderRadius: 30,
//           backgroundColor: 'green',
//           marginBottom: 40,
//           height: 80,
//         },
//       }}>
//       <Bottom.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
//         }}
//       />
//       {/* <Bottom.Screen name="About" component={AboutUs} /> */}
//       <Bottom.Screen name="Contact" component={ContactUs} />
//     </Bottom.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="Main"
//           screenOptions={{
//             headerTintColor: 'red',
//             headerStyle: {
//               backgroundColor: 'darkblue',
//             },
//             headerShown: true,
//             animation: 'simple_push',
//           }}>
//           <Stack.Screen name="Main" component={bottomTabs} />
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{
//               headerShown: true,
//               headerTitle: 'Welcome Back!',
//               animation: 'slide_from_left',
//             }}
//           />
//           <Stack.Screen name="About" component={AboutUs} />
//           <Stack.Screen name="Contact" component={ContactUs} />
//           <Stack.Screen name="Users" component={Users} />
//           <Stack.Screen name="details" component={UserDetails} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

// import { Image, ScrollView, StatusBar, Switch, Text, View } from 'react-native';
// import './global.css';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Home from 'screens/Home';
// import AboutUs from 'screens/AboutUs';
// import ContactUs from 'screens/ContactUs';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import AntDesign from '@expo/vector-icons/AntDesign';

// var Bottom = createBottomTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaView style={{flex:1}}>

//     <NavigationContainer

//     >

//     <Bottom.Navigator
//     screenOptions={{
//       headerShown:false,
//       tabBarLabelStyle:{fontSize:20, fontWeight:"bold"},
//       tabBarActiveTintColor:"red",
//       tabBarInactiveTintColor:"black",
//       tabBarStyle:{paddingBottom:5 , borderRadius:30 ,backgroundColor:"green" , marginBottom:40,height:80}
//     }}
//  >

//       <Bottom.Screen name="Home" component={Home} options={{tabBarIcon:({color,size})=><AntDesign name="home" size={size} color={color} /> }} />
//       <Bottom.Screen name="About" component={AboutUs} />
//       <Bottom.Screen name="Contact" component={ContactUs} />
//     </Bottom.Navigator>

//     </NavigationContainer>
//         </SafeAreaView>

//   );
// }

import { Image, ScrollView, StatusBar, Switch, Text, View } from 'react-native';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from 'screens/Home';
import AboutUs from 'screens/AboutUs';
import ContactUs from 'screens/ContactUs';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Users from 'screens/Users';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ThemeProvider } from 'context/ThemeContext';
import { useState } from 'react';

var Drawer = createDrawerNavigator();

export default function App() {












  
  return (
    <ThemeProvider >

    <SafeAreaView style={{flex:1}}>

    <NavigationContainer

    >

      <Drawer.Navigator
     
   >

        <Drawer.Screen name="Home" component={Home} options={{tabBarIcon:({color,size})=><AntDesign name="home" size={size} color={color} /> }} />
        <Drawer.Screen name="About" component={AboutUs} />
        <Drawer.Screen name="Contact" component={ContactUs} />
        <Drawer.Screen name="Users" component={Users} />
      </Drawer.Navigator>

    </NavigationContainer>
        </SafeAreaView>
    </ThemeProvider>

  );
}
