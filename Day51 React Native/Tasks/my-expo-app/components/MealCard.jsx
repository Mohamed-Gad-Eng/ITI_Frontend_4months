import { Image, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


export default function MealCard({meal}){
    const navigation = useNavigation();

    return(
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Detail', { meal })}
            className="p-4 w-full min-h-64 rounded-2xl mt-5 bg-white"
        >
            <Image source={{uri:meal.strMealThumb}} className="w-full h-32 rounded-xl"/>
            <Text className="font-bold" numberOfLines={1} ellipsizeMode="tail">
                {meal.strMeal}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">{meal.strTags}</Text>
            <View className="flex flex-row items-center justify-between">
                <Text className="font-bold">{`$${(Number(meal.idMeal)/1000).toPrecision(4)}`}</Text>
                <TouchableOpacity className="w-12 h-12 items-center justify-center rounded-full bg-orange-500">
                    <Feather name="plus" size={24} color="white" />
                </TouchableOpacity>
            </View> 
        </TouchableOpacity>
    )
}
