import { styles } from "./authWrapper.styles";
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

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={[styles.Title, styles.titlecolor]}>Hello !</Text>
      <Text style={[styles.titlecolor, styles.subTitle]}>Welcome to the AI world</Text>
      <View style={styles.content}>{children}</View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};
