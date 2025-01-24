import { StyleSheet } from 'react-native';
import { originalColor } from "../authWrapper.styles";
const radius = 29;
const treeSize = 200;
const Bradius = 30;
export const styles = StyleSheet.create({
  contain: {
    marginTop: "15%",
    marginHorizontal: "10%",
  },
  // titlecolor: {
  //   marginLeft: "10%",
  //   color: "white",
  // },
  // Title: {
  //   fontWeight: 800,
  //   fontSize: 50,
  // },
  // subTitle: {
  //   fontSize: 20,
  //   marginLeft: "11%",
  // },
  // content: {
  //   marginTop: "70%",
  //   width: "100%",
  //   position: "absolute",
  //   height: "100%",
  //   backgroundColor: "#e9e9e9",
  //   borderTopRightRadius: radius,
  //   borderTopLeftRadius: radius,
  // },
  text: {
    fontSize: 30,
    textAlign: "left",
    color: originalColor,
    marginBottom: 20,
    fontWeight: "bold",
  },
  logo: {
    position: "absolute",
    height: treeSize,
    width: treeSize,
    top: -70,
    right: 0,
  },
  inputContainer: {
    position: "relative",
  },
  inputLogo: {
    position: "absolute",
    top: 11,
    left: 20,
    height: 20,
    width: 20,
  },
  textInput: {
    backgroundColor: "white",
    height: 45,
    width: "100%",
    borderRadius: Bradius,
    marginBottom: 20,
    paddingLeft: 60,
  },
  error: {
    color: "red",
    marginTop: -15,
    marginBottom: 10,
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 20,
  },
  button: {
    width: "100%",
    backgroundColor: originalColor,
    borderRadius: Bradius,
    height: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 7,
  },
  forget: {
    marginTop: -10,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "right",
    color: originalColor,
  },
  signup: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#777777",
  },
  innerSign: {
    color: originalColor,
    fontWeight: "bold",
  },
  farmer: {
    height: 150,
    width: 150,
    marginLeft: "25%",
  },
  advertise: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#777777",
  },
});
