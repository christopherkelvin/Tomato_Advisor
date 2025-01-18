import { StyleSheet } from "react-native";
const radius = 29;
export const originalColor = "#026a75";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: originalColor,
    position: "relative",
  },
  titlecolor: {
    marginLeft: "10%",
    color: "white",
  },
  Title: {
    fontWeight: 800,
    fontSize: 50,
    marginTop: "25%",
  },
  subTitle: {
    fontSize: 20,
    marginLeft: "10%",
  },
  content: {
    marginTop: "57%",
    width: "100%",
    position: "absolute",
    height: "100%",
    backgroundColor: "#e9e9e9",
    borderTopRightRadius: radius,
    borderTopLeftRadius: radius,
  },
});
