import { View, Text, Button } from 'react-native';
import React from 'react';

export default function AboutUs({ navigation,route }) {
  console.log(route.params?.message);
  // alert(route.params?.message)
  alert(route.params?.phoneNumber)

  
  return (
    <View className="h-screen items-center justify-center bg-blue-500">
      <Text className="text-2xl text-white">AboutUs</Text>
      <Button onPress={() => navigation.navigate('Contact')} title="To Contact"></Button>
      <Button onPress={()=>navigation.pop()} title="Back"></Button>
      <Button title='To Users ' onPress={()=>navigation.navigate("Users")}></Button>
      {/* <Button onPress={()=>navigation.goBack()} title="Back"></Button> */}
    </View>
  );
}
