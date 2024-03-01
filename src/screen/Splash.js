import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Splash() {
    const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Signup'); 
    }, 2000);

    return () => {
      clearTimeout(timeout); 
    };
  }, []); 

  return (
    <View style={styles.container}>
      <Image source={require("../asset/images/splash.png")} style={styles.img}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  img: {
    width: "80%",
    height: "40%",
    alignSelf: "center",
  },
});
