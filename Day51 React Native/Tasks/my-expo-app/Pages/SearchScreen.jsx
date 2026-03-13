import { ActivityIndicator, FlatList, StatusBar, TextInput, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "../components/MealCard";

export default function SearchScreen(){

    const [isLoading, setIsLoading] = useState(false)
    const [meals, setMeals] = useState([])
    const [searchQ, setSearchQ] = useState("")

    
    async function fetchMeals(query = ""){
        try{
            setIsLoading(true)

            const q = query.trim();
            const url = q
              ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(q)}`
              : "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

            const result = await axios.get(url)
            setMeals(result.data?.meals ?? [])
        }
        catch(err){
            console.log(err);
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMeals()
    }, [])


    return (
        <View className="flex-1 bg-gray-100 p-6 pt-8">
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} translucent={false} />

            <View className="flex-row h-20 items-center rounded-2xl bg-gray-200 px-3 py-2.5">
                <View className="mr-2.5">
                    <Feather name="search" size={20} color="#181c2e" />
                </View>
                <TextInput
                    className="flex-1"
                    placeholder="Search dishes, restaurants"
                    keyboardType="web-search"
                    value={searchQ}
                    onChangeText={setSearchQ}
                    onChange={()=>fetchMeals(searchQ)}
                />
            </View>

            <FlatList
                data={meals}
                renderItem={({ item, index }) => (
                    <View className={index % 2 === 0 ? "flex-1 pr-2" : "flex-1 pl-2"}>
                        <MealCard meal={item} />
                    </View>
                )}
                keyExtractor={(item) => item.idMeal}
                refreshing={isLoading}
                numColumns={2}
                onRefresh={fetchMeals}
            />
            {isLoading&&<ActivityIndicator size={50}/>}
        </View>
    )
}
