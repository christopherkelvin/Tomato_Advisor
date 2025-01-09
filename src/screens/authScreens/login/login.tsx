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
import { AuthWrapper } from "../authWrapper";
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
    handleInputChange
  } = useLoginHook();

  if (isLoading) {
    return <LoaderPage />;
  }
 

  return (
    <AuthWrapper>
      <Text style={styles.text}>Login Here</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        style={styles.textInput}
        onChangeText={handleInputChange(setEmail)}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput
        placeholder="Enter your password"
        value={password}
        style={styles.textInput}
        secureTextEntry
        onChangeText={setPassword}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      <Text style={styles.forget} onPress={()=>navigation.navigate('Register')} >Don't have an account ?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={submitForm}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </AuthWrapper>
  );
}
