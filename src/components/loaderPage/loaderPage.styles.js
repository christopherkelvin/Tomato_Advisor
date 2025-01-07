import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3333",
    opacity: 0.8,
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
    backgroundColor: "rgba(255,255,255,0.2)",
  }
});