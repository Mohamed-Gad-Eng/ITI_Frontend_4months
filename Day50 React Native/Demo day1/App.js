import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const textStyle = {
    color: "red",
    backgroundColor: "black",
    fontSize: 30,
    marginTop: 34,
  };
  return (
    <ScrollView horizontal={false}>
      <View>
        {/* <Text style={textStyle}>Helloooo</Text> */}
        <StatusBar
          backgroundColor={"lightgreen"}
          barStyle={"dark-content"}
          translucent={false}
        />

        {/* online imge */}
        {/* <Image
          source={{ uri: "https://wallpapercave.com/wp/0pMys4b.jpg" }}
          width={200}
          height={200}
        />
        <Image
          source={{ uri: "https://wallpapercave.com/wp/0pMys4b.jpg" }}
          width={200}
          height={200}
        />
        <Image
          source={{ uri: "https://wallpapercave.com/wp/0pMys4b.jpg" }}
          width={200}
          height={200}
        />
        <Image
          source={{ uri: "https://wallpapercave.com/wp/0pMys4b.jpg" }}
          width={200}
          height={200}
        />
        <Image
          source={{ uri: "https://wallpapercave.com/wp/0pMys4b.jpg" }}
          width={200}
          height={200}
        /> */}

        {/* local img */}
        {/* <Image
          source={require("./assets/img2.jpg")}
          style={{ width: 300, height: 300 }}
        /> */}
      </View>

      {/* <View>
        <Text>Heloo 2</Text>
      </View> */}

      {/* <View style={styles.container}>
        <Text style={textStyle}> hello </Text>
        <Text style={styles.textStyle2}>hello from another side</Text>
      </View> */}

      {/* <ImageBackground source={{uri:"https://www.pixelstalk.net/wp-content/uploads/2016/10/Blank-Background-for-Desktop.jpg"}} style={{width:"100%",height:"300"}}>
      <Text>Hi Developers</Text>
      <Text>Hi Developers</Text>
      <Text>Hi Developers</Text>
      <Text>Hi Developers</Text>
      <Text>Hi Developers</Text>
      <Text>Hi Developers</Text>
      <Text>Hi Developers</Text>

      </ImageBackground> */}

      <TextInput
        style={[styles.textInputStyle, { padding: 30 }]}
        placeholder="enter your name"
        placeholderTextColor={"lightgreen"}
        editable={true}
        numberOfLines={5}
        multiline
        // maxLength={3}
        autoCapitalize="sentences"
        autoCorrect={true}
        keyboardType="email"
        // returnKeyType=""
      />
<Ionicons name="user-outlined" size={32} color="green" />
      <TextInput
        style={styles.textInputStyle}
        returnKeyType="next"
        // onChangeText={(value)=>{console.log(value)}}
        onChange={(e) => {
          console.log(e.nativeEvent.text);
        }}
      />
      <Button
        title="Submit"
        onPress={() => {
          console.log("pressed");
        }}
      ></Button>

      <TouchableOpacity onPress={()=>{console.log("login pressed");
      }} style={styles.btn}>
        <Text>LOG In </Text>
      </TouchableOpacity>

      <Pressable style={styles.btn}>
          <Text>LOG In </Text>
      </Pressable>
    </ScrollView>
  );
}

var styles = StyleSheet.create(
  {
  textStyle2: {
    color: "red",
    backgroundColor: "black",
    fontSize: 30,
    marginTop: 34,
  },
  container: {
    flexDirection: "row",
    width: 400,
    height: 200,
    padding: 20,
    backgroundColor: "yellow",
    justifyContent: "start",
    alignItems: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    width: 400,
  },
  btn: {
    backgroundColor: "green",
    width: 200,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    alignItems:"center"
  },
});
/* 

div ,span ----> <View> </View>

<p> <h1>  ----> <Text> </Text>

<img/>    --- > <Image/>

--------------> <ImageBackground> </ImageBackground>

<input/>   ----> <TextInput>

<Button>
<TouchableOpacity>
<Pressable>
------------------------
<ScrollView/>
<StatusBar/>

*/
