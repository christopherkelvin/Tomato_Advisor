import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./home.styles";
export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
        <View/>
      </View>
    </SafeAreaView>
  );
}
