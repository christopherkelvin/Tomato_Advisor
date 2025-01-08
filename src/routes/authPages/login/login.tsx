import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./login.styles";
import LoaderPage from "../../../components/loaderPage/loaderPage";
const tomatoImage = require("../../../../assets/Tomato.png");
export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <LoaderPage />;
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.blur}>
        <Image style={styles.blurImage1} source={tomatoImage} />
      </View>
      <View style={styles.blur1}>
        <Image style={styles.blurImage1} source={tomatoImage} />
      </View>
      <Text style={styles.text}>Login Here</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        style={styles.textInput}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        style={styles.textInput}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Text style={styles.forget}>Don't have an account ?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}
