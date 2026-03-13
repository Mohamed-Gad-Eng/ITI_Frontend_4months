import {  Image, StatusBar, Switch, Text,View } from 'react-native';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import UserCard from './components/UserCard';
import Users from './screens/Users';
const users = [
  {
    id: 1,
    name: 'Ahmed',
    image: 'https://i.pravatar.cc/150?img=1',
        email: "ahmed@gmail.com"

  },
  {
    id: 2,
    name: 'Sara',
    image: 'https://i.pravatar.cc/150?img=2',
        email: "sara@gmail.com"

  },
  {
    id: 3,
    name: 'Mona',
    image: 'https://i.pravatar.cc/150?img=3',
        email: "mona@gmail.com"

  },
  {
    id: 4,
    name: 'Ali',
    image: 'https://i.pravatar.cc/150?img=4',
        email: "ali@gmail.com"

  },
];

export default function App() {
  const [isActive,setIsActive]=useState(true)
 return(
 
  <SafeAreaView style={{backgroundColor:isActive?"white":"gray",height:"100%"}} >

    <Text>Hello</Text>

    <Switch
    value={isActive}
    // onChange={()=>{setIsActive(!isActive)}}
    onValueChange={setIsActive}
    thumbColor={isActive?"green":"gray"}
    trackColor={{true:"lightgreen",false:"black"}}
    />
    <Text> {isActive?"ON":"OFF"} </Text>

    {/* <View>

      <Text>USers</Text>
  { users.map((user)=>
  <UserCard user={user} />
  ) }

    </View> */}

    <Users/>
  </SafeAreaView>
  );
}
