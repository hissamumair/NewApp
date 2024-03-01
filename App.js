// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Splash from './src/screen/Splash';
// import Signup from './src/screen/Signup';
// import Login from './src/screen/Login';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
//         <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
//         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>


//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({})





// import { NavigationContainer } from '@react-navigation/native';
// //import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Assuming you have Home and Post screens defined elsewhere
// import Home from './src/screen/Home';
// import Post from './src/screen/Post';
// import Splash from './src/screen/Splash';
// import Signup from './src/screen/Signup';
// import Login from './src/screen/Login';

// //const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     // <NavigationContainer>
//     //   <Tab.Navigator>
//     //     <Tab.Screen name="Home" component={Home} />
//     //     <Tab.Screen name="Post" component={Post} />
//     //   </Tab.Navigator>
//     // </NavigationContainer>
//   //);
// //}


// //const HomeStackScreen = () => (
  
//   <Stack.Navigator>
//     <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//     <Stack.Screen
//       name="Signup"
//       component={Signup}
//       options={{ headerTitle: 'Signup', headerShown: true }} // Adjust header settings as needed
//     />
//     <Stack.Screen
//       name="Login"
//       component={Login}
//       options={{ headerTitle: 'Login', headerShown: true }} // Adjust header settings as needed
//     />
//   </Stack.Navigator>
// );
//   }
// export default App;





import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing screens
import Splash from './src/screen/Splash';
import Signup from './src/screen/Signup';
import Login from './src/screen/Login';
import Home from './src/screen/Home';
import Post from './src/screen/Post';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Setting from './src/screen/Setting';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack navigator for authentication flow (Splash, Signup, Login)
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        
        <Stack.Screen name="HomeStack" component={HomeStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Corrected component name for consistency
const HomeStackScreen = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => (
          <FontAwesome name="home" size={40} color="black" />
        ),
      }}  />
    <Tab.Screen name="Post" component={Post} options={{
        tabBarIcon: () => (
          <FontAwesome6 name="signs-post" size={35} color="black"/> ),
        }} />
        <Tab.Screen name="Setting" component={Setting} options={{
        tabBarIcon: () => (
          <AntDesign name="setting" size={35} color="black"/> ),
        }} />
  </Tab.Navigator>
);

export default App;


















// Bottom tab navigator for main app flow (Home, Post)
// const MainTabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Post" component={Post} />
//   </Tab.Navigator>
// );


 