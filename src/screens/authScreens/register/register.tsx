import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useRegisterHook } from "../../../hooks/useRegisterHook";
import { AuthWrapper } from "../authWrapper";
import { styles } from "../login/login.styles";
export default function Register({ navigation }: any) {
  const {
    errors,
    setErrors,
    handleInputChange,
    password,
    setPassword,
    email,
    setEmail,
    handleRegister,
  } = useRegisterHook();
  return (
    <AuthWrapper>
      <View style={styles.contain}>
        <Text style={styles.text}>Register</Text>
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
        <TextInput
          placeholder="Confirm password"
          style={styles.textInput}
          secureTextEntry
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        <Text
          style={styles.forget}
          onPress={() => navigation.navigate("Login")}
        >
          I have an account
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </AuthWrapper>
  );
}
