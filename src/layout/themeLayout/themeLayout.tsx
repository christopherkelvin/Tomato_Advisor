import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { styles } from "./themeLayout.styles";

interface ThemeProps {
    children: ReactNode;
}
export const ThemeLayout: React.FC<ThemeProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
