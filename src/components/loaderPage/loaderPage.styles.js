import { StyleSheet } from "react-native";
const tomatoSize = 60;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3333",
    opacity: 1,
    position: "relative",
    padding: 30,
    justifyContent: "center",
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  largeImage: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  smallImage1: {
    position: "absolute",
    width: tomatoSize,
    height: tomatoSize,
    bottom: 250,
    left: 50,
    opacity: 0.5,
  },
  smallImage2: {
    top: 100,
    right: 50,
    position: "absolute",
    width: tomatoSize,
    height: tomatoSize,
    opacity: 0.7,
  },
  titleText: {
    position: "absolute",
    fontSize: 25,
    fontWeight: 900,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  textPosition1: {
    bottom: 220,
    left: 160,
  },
  textPosition: {
    bottom: 250,
    left: 150,
  },
  welcomeText: {
    position: "absolute",
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
    bottom: 150,
    right: 50,
  },
});
