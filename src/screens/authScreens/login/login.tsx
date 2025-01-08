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
import { Error } from "../../../types/auth";

const tomatoImage = require("../../../../assets/Tomato.png");
export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Error>({});
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const validate = () => {
    let errors: Error = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  const submitForm = () => {
    const validated = validate();
    if (validated) {
          // API call to login
          console.log("Login successful", email, password);
        }
  }

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
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput
        placeholder="Enter your password"
        value={password}
        style={styles.textInput}
        secureTextEntry
        onChangeText={setPassword}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      <Text style={styles.forget}>Don't have an account ?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={submitForm}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}
