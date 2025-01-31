import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./home.styles";
import { ThemeLayout } from "../../../layout/themeLayout/themeLayout";
export function Home() {
  return (
    <ThemeLayout>
      <View>
        <Text>Home</Text>
        <View/>
      </View>
    </ThemeLayout>
  );
}
