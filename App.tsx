import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "./global.css";
import {Login} from "./src/screens/authScreens/login/login";
import Register from "./src/screens/authScreens/register/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/screens/normalScreens/home/home";
import { Profile } from "./src/screens/normalScreens/profile/profile";
import { UseLoggedInHook } from "./src/hooks/useLoggedInHook";
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
            }}
          />
          <Tab.Screen
            name="advisor"
            options={{
              title: "Advisor",
            }}
            component={Profile}
          />
          <Tab.Screen
            name="history"
            component={Profile}
            options={{
              title: "  History",
            }}
          />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              title: "Profile",
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}


