import { View, Text, Image } from 'react-native'
import React from 'react'

export default function UserDetails({route}) {
    console.log(route.params?.user);
    const user=route.params?.user
    
  return (
    <View>
        <Image source={{uri:user.image}} className='w-20 h-20'/>
      <Text>{user.username}</Text>

    </View>
  )
}