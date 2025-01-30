import { NavigationContainer } from "@react-navigation/native";
import "./global.css";
import {Login} from "./src/screens/authScreens/login/login";
import Register from "./src/screens/authScreens/register/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/screens/normalScreens/home/home";
import { Profile } from "./src/screens/normalScreens/profile/profile";
import { UseLoggedInHook } from "./src/hooks/useLoggedInHook";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { TabBar } from "./src/components/tabBar/tabBar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const { isLogged } = UseLoggedInHook();
  return (
    <NavigationContainer>
      {isLogged ? (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          tabBar={(props) => <TabBar {...props} />}
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: "#000000",
            tabBarActiveTintColor: "#0000FF",
          }}
        >
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={20} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="advisor"
            options={{
              title: "Advisor",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="brain" size={20} color="black" />
              ),
            }}
            component={Profile}
          />
          <Tab.Screen
            name="history"
            component={Profile}
            options={{
              title: "History",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="history" size={20} color={color} />
              ),
              tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              title: "Profile",
              tabBarIcon: ({ color }) => (
                <Feather name="user" size={20} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}


