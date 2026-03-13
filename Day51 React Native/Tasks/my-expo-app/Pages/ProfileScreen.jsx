import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useMemo, useState } from "react";
import * as ImagePicker from 'expo-image-picker';


export default function ProfileScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const avatarSource = useMemo(() => {
    return require("../assets/icon.png");
  }, []);

  function changeProfileImage(){
    // 1- Open gallery
    await ImagePicker.launchImageLibraryAsync()
  }

  return (
    <View className="flex-1 bg-white p-6 pt-8">
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} translucent={false} />

      <View className="items-center mt-6">
        <View className="relative">
          <Image source={avatarSource} className="w-32 h-32 rounded-full" resizeMode="cover" />

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {}}
            className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-orange-500 items-center justify-center"
          >
            <Feather name="edit-2" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-10">
        <Text className="mb-2 text-sm font-semibold text-gray-700">Full Name</Text>
        <TextInput
          className="h-14 rounded-2xl bg-gray-100 px-4 text-base"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
          returnKeyType="next"
        />

        <Text className="mt-6 mb-2 text-sm font-semibold text-gray-700">Email</Text>
        <TextInput
          className="h-14 rounded-2xl bg-gray-100 px-4 text-base"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
        />
      </View>
    </View>
  );
}
