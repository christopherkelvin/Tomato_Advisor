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
    width: '70%',
    height: '30%',
    alignSelf: "center",
  },
  smallImage1: {
    position: "absolute",
    width: tomatoSize,
    height: tomatoSize,
    bottom: '30%',
    left: 50,
    opacity: 0.5,
  },
  smallImage2: {
    top: '10%',
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
    bottom: '28%',
    left: '45%',
  },
  textPosition: {
    bottom: '32%',
    left: '40%',
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
