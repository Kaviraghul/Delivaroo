import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyledComponent } from "nativewind";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Restaurant" component={RestaurantScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
