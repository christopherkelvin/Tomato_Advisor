import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
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
    paddingVertical: "2%",
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
    bottom: "20%",
    left: 60,
    opacity: 0.7,
  },
  blurImage1: {
    height: 80,
    width: 80,
  },
  error: {
    color: "black",
    marginTop: -15,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
