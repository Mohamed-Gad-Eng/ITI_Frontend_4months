import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';



export default function DetailScreen({ route }){
    const meal = route?.params?.meal;

    if (!meal) return <View className="flex-1 bg-white" />;
    
    return(
        <View className="flex-1 bg-white p-6">
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} translucent={false} />

            <Image source={{uri:meal.strMealThumb}} className="w-full h-56 rounded-2xl" resizeMode="cover" />

            {!!meal.strTags && (
                <Text className="mt-3 text-sm text-gray-600" numberOfLines={1}>
                    {meal.strTags}
                </Text>
            )}

            <Text className="mt-1 text-xl font-bold" numberOfLines={2} ellipsizeMode="tail">
                {meal.strMeal}
            </Text>

            <Text className="mt-1 text-gray-700" numberOfLines={2} ellipsizeMode="tail">
                {meal.strInstructions || meal.strMeal}
            </Text>

            <View className="mt-5 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <Feather name="star" size={16} color="#f97316" />
                    <Text className="ml-2 font-semibold">4.7</Text>
                </View>

                <View className="flex-row items-center">
                    <Feather name="truck" size={16} color="#f97316" />
                    <Text className="ml-2 font-semibold">Free</Text>
                </View>

                <View className="flex-row items-center">
                    <Feather name="clock" size={16} color="#f97316" />
                    <Text className="ml-2 font-semibold">20 min</Text>
                </View>
            </View>

            <View className="mt-6">
                <Text className="text-base font-bold">Size:</Text>
                <View className="mt-3 flex-row items-center">
                    <TouchableOpacity className="w-12 h-12 items-center justify-center rounded-full bg-gray-200">
                        <Text className="font-semibold">10"</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="ml-3 w-12 h-12 items-center justify-center rounded-full bg-orange-500">
                        <Text className="font-semibold text-white">14"</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="ml-3 w-12 h-12 items-center justify-center rounded-full bg-gray-200">
                        <Text className="font-semibold">16"</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}