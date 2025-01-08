import { styles } from "./login/login.styles";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { ReactNode } from "react";

interface AuthWrapperProps {
    children: ReactNode;
}

const tomatoImage = require("../../../assets/Tomato.png");


export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.blur}>
        <Image style={styles.blurImage1} source={tomatoImage} />
      </View>
      <View style={styles.blur1}>
        <Image style={styles.blurImage1} source={tomatoImage} />
      </View>
      {children}
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};
