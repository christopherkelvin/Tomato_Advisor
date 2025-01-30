import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 50,
    backgroundColor: "white",
    // paddingVertical: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabBarContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    gap: 4,
    textAlign: "center",
    // backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  tabBarText: {
    marginTop: 1,
  },
});
