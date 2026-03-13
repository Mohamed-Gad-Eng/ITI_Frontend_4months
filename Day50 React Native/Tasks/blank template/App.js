import { Text, View, } from "react-native";
import HomeScreen from "./Pages/HomeScreen"

export default function App() {

  return(
    <View style={{flex:1}}> 
      <HomeScreen/>
    </View>
  )
}

/*
div , span  ---- > <View> </View>

<p> <hl> ---- > <Text> </Text>

< img/> ---- > <Image/>

<input/> ---- > < Textlnput>

          ---- > < ImageBackground> </ImageBackground>


<ScroIIView/>
<StatusBar/>

*/