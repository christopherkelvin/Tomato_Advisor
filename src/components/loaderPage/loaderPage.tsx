import { View, Text, Image } from "react-native";
import { styles } from "./loaderPage.styles";
export default function LoaderPage() {
  return (
    <View style={styles.container}>
      <View style={styles.blur} />
      <Image source={require("../../../assets/Tomato.png")} />
    </View>
  );
}

{/* <Image source={require("../../../assets/Tomato.png")} />
<Text>Loading ................</Text> */}