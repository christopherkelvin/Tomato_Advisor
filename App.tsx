import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "./global.css";
import React from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blur}></View>
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
    // alignItems: "center",
    padding: 30,
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    textAlign: "left",
    color: "black",
    marginBottom: 20,
    // marginLeft: -200,
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
    paddingVertical: 12,
    paddingHorizontal: 70,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color:'#FF3333'
  },
  blur: {},
});
