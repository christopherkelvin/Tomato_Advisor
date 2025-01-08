import { View, Text, Image } from "react-native";
import { styles } from "./loaderPage.styles";
const tomatoPic = require("../../../assets/Tomato.png");
export default function LoaderPage() {
  return (
    <View style={styles.container}>
      <View style={styles.blur} />
      <Image style={styles.largeImage} source={tomatoPic} />
      <Image style={styles.smallImage1} source={tomatoPic} />
      <Image style={styles.smallImage2} source={tomatoPic} />
      <Text style={[styles.titleText, styles.textPosition]}>Tomato Crop</Text>
      <Text style={[styles.titleText, styles.textPosition1]}>
        Production Advisor
      </Text>
      <Text style={styles.welcomeText}>
        Welcome .....
      </Text>
    </View>
  );
}
