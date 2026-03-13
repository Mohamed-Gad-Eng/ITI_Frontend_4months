import { View, Text, Image } from 'react-native'
import React from 'react'

export default function UserCard({user}) {
  return (
   <View key={user.id} className="p-2 border border-green-500 rounded-md m-1"> 
    <Image source={{uri:user.image}} className="w-20 h-20"/>
    <Text>{user.name} </Text> 
    <Text>{user.email}</Text> 
     </View>
  )
}