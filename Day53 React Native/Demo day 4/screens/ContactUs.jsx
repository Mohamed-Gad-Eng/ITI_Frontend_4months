import { View, Text, Button } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { theme } from 'context/ThemeContext';

export default function ContactUs({navigation}) {
      const {isDark,setIsDark}=useContext(theme)

  useEffect(()=>{

    navigation?.preload("Users")
  },[])
  return (
    <View className={`h-screen items-center justify-center ${isDark?"bg-black":"bg-yellow-500"}`}>
      <Text className="text-2xl text-white">ContactUs</Text>
      {/* <Button onPress={()=>navigation.navigate("About",{phoneNumber:1002021002010})} title="To About"></Button> */}
      <Button onPress={()=>navigation.push("About",{phoneNumber:1002021002010})} title="To About"></Button>
    </View>
  );
}
