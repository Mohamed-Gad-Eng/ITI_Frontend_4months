import {SafeAreaView} from 'react-native-safe-area-context';
import './global.css';
import SearchScreen from './Pages/SearchScreen';
import HomeScreen from './Pages/HomeScreen';
import DetailScreen from './Pages/DetailScreen';
import ProfileScreen from './Pages/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather, Ionicons } from '@expo/vector-icons';

const Bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <Feather name="home" size={size} color={color} />;
          }

          if (route.name === 'Restaurant') {
            return <Ionicons name="restaurant-outline" size={size} color={color} />;
          }

          if (route.name === 'Profile') {
            return <Feather name="user" size={size} color={color} />;
          }

          return null;
        },
      })}
    >
      <Bottom.Screen name="Home" component={HomeScreen} />
      <Bottom.Screen name="Restaurant" component={SearchScreen} />
      <Bottom.Screen name="Profile" component={ProfileScreen} />
    </Bottom.Navigator>
  );
}


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={BottomTabs} />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              headerShown: true,
              title: 'Details',
              headerBackTitleVisible: false,
              headerTintColor: '#181c2e',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
