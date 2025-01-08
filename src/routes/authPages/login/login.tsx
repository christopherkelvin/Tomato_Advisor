import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./login.styles";
import LoaderPage from "../../../components/loaderPage/loaderPage";
export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <LoaderPage />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.blur}>
        <Image
          style={styles.blurImage1}
          source={require("../../../../assets/Tomato.png")}
        />
      </View>
      <View style={styles.blur1}>
        <Image
          style={styles.blurImage1}
          source={require("../../../../assets/Tomato.png")}
        />
      </View>
      <Text style={styles.text}>Login Here</Text>
      <TextInput placeholder="Enter your email" style={styles.textInput} />
      <TextInput placeholder="Enter your password" style={styles.textInput} />
      <Text style={styles.forget}>Don't have an account ?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
