import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useRegisterHook } from "../../../hooks/useRegisterHook";
import { AuthWrapper } from "../authWrapper";
import { styles } from "./register.styles";
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
      <View>
        <Text style={styles.text}>Register Here</Text>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthWrapper>
  );
}
