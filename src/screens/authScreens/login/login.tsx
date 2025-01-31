import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { styles } from "./login.styles";
import LoaderPage from "../../../components/loaderPage/loaderPage";
import { AuthWrapper } from "../../../layout/authLayout/authWrapper";
import { useLoginHook } from "../../../hooks/useLoginHook";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {AuthStackParamList} from "../../../types/auth";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Login"
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}
export const Login:React.FC<LoginProps> = ({navigation})=> {
  const {
    isLoading,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    submitForm,
    handleInputChange,
    treeImage,
  } = useLoginHook();

  if (isLoading) {
    return <LoaderPage />;
  }
 

  return (
    <AuthWrapper>
      <Image source={treeImage} style={styles.logo} />
      <View style={styles.contain}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            style={styles.textInput}
            onChangeText={handleInputChange(setEmail)}
          />
          <Image
            source={require("../../../../assets/email.png")}
            style={styles.inputLogo}
          />
        </View>
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            style={styles.textInput}
            secureTextEntry
            onChangeText={setPassword}
          />
          <Image
            source={require("../../../../assets/unlock.png")}
            style={styles.inputLogo}
          />
        </View>
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        <Text style={styles.forget}>Forget Password ?</Text>
        <TouchableOpacity style={styles.button} onPress={submitForm}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signup}>
          Don't have an account?
          <Text
            style={styles.innerSign}
            onPress={() => navigation.navigate("Register")}
          >
            {" "}
            Sign Up
          </Text>
        </Text>
        <Image style={styles.farmer} source={require('../../../../assets/farmer.png')} />
        <Text style={styles.advertise}>Advisor for better production</Text>
      </View>
    </AuthWrapper>
  );
}
