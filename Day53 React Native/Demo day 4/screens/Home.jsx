import { View, Text, Button, Modal, TouchableOpacity, Pressable, Image, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import { theme } from 'context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState('');
  const { isDark, setIsDark } = useContext(theme);
  // console.log(isDark);

  // console.log(navigation);

  async function changeProfile() {
    // 0 request permission
    await ImagePicker.requestMediaLibraryPermissionsAsync();

    // 1- open gallery
    var gallery = await ImagePicker.launchImageLibraryAsync();

    console.log(gallery.assets[0].uri);

    //  2- store img path

    setImg(gallery.assets[0].uri);
  }

  function handleDelete() {
    // alert("hiiii")

    Alert.alert('Delete User', 'Are You sure You want to  delete?', [
      {
        text: 'Yes',
        onPress: () => {
          console.log('User deleted');
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('not deleted');
        },
      },
      {
        text: 'Cancel',
        onPress: () => {
          console.log('canceled');
        },
      },
    ]);
  }
  async function storeToStorage() {
    const number = '2222122222';
    var obj = {
      name: 'ali',
      age: '20',
    };

    await AsyncStorage.setItem('obj', JSON.stringify(obj));
  }
  async function getFromStorage() {
    const number = await AsyncStorage.getItem('obj');
    console.log(JSON.parse(number).age);
    //  console.log(number );
  }
  return (
    <View
      className={`h-screen items-center justify-center ${isDark ? 'bg-black' : 'bg-green-500'} `}>
      <Text className="text-2xl text-white">Home</Text>

      {/* <Button onPress={()=>navigation.navigate("About",{message:"Welcome from Home"})} title='To About'></Button> */}
      {/* <Button onPress={() => setShowModal(true)} title="Open Modal"></Button> */}
      {/* 
      <TouchableOpacity
        onPress={changeProfile}
        className="flex-row items-center justify-center gap-2 rounded-xl bg-orange-500 p-2 px-4">
        <Text>Change Your Profile</Text>
        <AntDesign name="camera" size={24} color="black" />
      </TouchableOpacity>

      {img&&
      <View>

      <Image source={{ uri: img }} className="h-32 w-32 rounded-full" />
      <TouchableOpacity className="bg-red-500 p-3" onPress={() => setImg('')}>
        
        <Text>Remove Img </Text>
      </TouchableOpacity>
      </View>
      } */}
      {/* <TouchableOpacity
        onPress={handleDelete}
        className="flex-row items-center justify-center gap-2 rounded-xl bg-orange-500 p-2 px-4">
        <Text>Delete User</Text>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity> */}
      {/* <TouchableOpacity
        onPress={()=>setIsDark(!isDark)}
        className="flex-row items-center justify-center gap-2 rounded-xl bg-orange-500 p-2 px-4">
        <Text>Toggle Theme</Text>
        <AntDesign name={isDark?"sun":"moon"} size={24} color="black" />
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={storeToStorage}
        className="flex-row items-center justify-center gap-2 rounded-xl bg-orange-500 p-2 px-4">
        <Text>Store number in storage</Text>
        <AntDesign name={isDark ? 'sun' : 'moon'} size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={getFromStorage}
        className="flex-row items-center justify-center gap-2 rounded-xl bg-orange-500 p-2 px-4">
        <Text>get number from storage</Text>
        <AntDesign name={isDark ? 'sun' : 'moon'} size={24} color="black" />
      </TouchableOpacity>

      {/* <Modal animationType="none" transparent visible={showModal}>
        <Pressable
          onPress={() => setShowModal(false)}
          className="flex-1 items-start  justify-center bg-black/20">
          <View className="h-screen w-52 items-center justify-center rounded-2xl bg-white">
            <Text>Hi</Text>
            <TouchableOpacity
              className="w-20 rounded-full bg-red-700 p-2"
              onPress={() => setShowModal(false)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal> */}
    </View>
  );
}
