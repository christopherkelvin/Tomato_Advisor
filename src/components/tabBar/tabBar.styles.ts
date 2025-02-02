import { StyleSheet } from "react-native";
import { originalColor } from "../../layout/authLayout/authWrapper.styles";
export const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 70,
    backgroundColor: originalColor,
    borderRadius: 30,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
