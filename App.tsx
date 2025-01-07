import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import "./global.css";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blur}>
        <Image
          style={styles.blurImage1}
          source={require("./assets/Tomato.png")}
        />
      </View>
      <View style={styles.blur1}>
        <Image
          style={styles.blurImage1}
          source={require("./assets/Tomato.png")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3333",
    padding: 30,
    justifyContent: "center",
    position: "relative",
  },
  text: {
    fontSize: 25,
    textAlign: "left",
    color: "black",
    marginBottom: 20,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#F5F5F5",
    height: 45,
    width: "100%",
    opacity: 0.8,
    borderRadius: 5,
    marginBottom: 20,
  },
  forget: {
    marginLeft: 20,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FFDCD1",
    paddingVertical: 8,
    paddingHorizontal: 70,
    borderRadius: 18,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF3333",
  },
  blur: {
    position: "absolute",
    top: 80,
    right: 60,
  },
  blur1: {
    position: "absolute",
    bottom: 200,
    left: 60,
  },
  blurImage1: {
    height: 80,
    width: 80,
  },
});
