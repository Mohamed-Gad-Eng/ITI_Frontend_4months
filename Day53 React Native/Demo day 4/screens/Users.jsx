import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OnlineUserCard from 'components/OnlineUserCard'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Users({navigation}) {

    // 1- state store response 
    const [users,setUsers]=useState([])
    const [limit,setLimit]=useState(5)
    const [isLoading,setIsLoading]=useState(false)
    const [refreshing,setRefreshing]=useState(false)


    // 2- fuction fetch data
    async function fetchUsers(){

        try{
            setIsLoading(true)

      const res= await  axios.get(`https://dummyjson.com/users?limit=${limit}`)
      console.log(res.data.users)
      setUsers(res.data.users)
        }catch(err){
            console.log(err);
            
        }finally{
            setIsLoading(false)
        }
    }

    // useEffect to call the function
    useEffect(()=>{

        fetchUsers()
    },[limit])

   async function handleRefreshing(){
        setRefreshing(true)
        setLimit(5)
       await fetchUsers()
       setRefreshing(false)
    }

  return (
    <SafeAreaView>
      <Text>Users</Text>

      {/* {users.map((user)=>
        <OnlineUserCard user={user}/>
    )} */}
    <FlatList 
    ListHeaderComponent={<View className='bg-green-400 p-2 rounded'> <Text> Start of users </Text> </View>}
    ListFooterComponent={<View className='bg-red-400 p-2 rounded'> <Text> End of users </Text> </View>}
    data={users}
    renderItem={({item})=> <OnlineUserCard user={item} navigation={navigation}/>}
    onEndReached={()=>setLimit(limit+5)}
        numColumns={2}
    refreshing={refreshing}
    onRefresh={handleRefreshing}
    
    />
    {isLoading&&<ActivityIndicator size={50}/>}

    </SafeAreaView>
  )
}