import { StyleSheet } from "react-native";
import { originalColor } from "../authLayout/authWrapper.styles";
export const themeColor = originalColor;
export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: "100%",
    backgroundColor: themeColor,
  },
});
