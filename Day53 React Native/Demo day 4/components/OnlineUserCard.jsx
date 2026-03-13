import { View, Text, Image, Button } from 'react-native'
import React from 'react'

export default function OnlineUserCard({user,navigation}) {
  console.log(navigation);
  
  return (
     <View className="p-1 border rounded  m-2" key={user.id}>
           <Image source={{uri:user.image}} className="w-20 h-20 rounded-full" />
           <Text>{user.email}</Text>
           <Text>{user.firstName}</Text>
           <Button title='details' onPress={()=>navigation.navigate("details",{user:user})}/>
   
           </View>
  )
}