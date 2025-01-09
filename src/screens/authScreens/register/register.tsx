import { View, Text } from "react-native";
import { useRegisterHook } from "../../../hooks/useRegisterHook";
import { AuthWrapper } from "../authWrapper";
export default function Register() {
    return (
        <AuthWrapper>
            <View>
                <Text>Register Here</Text>
            </View>
        </AuthWrapper>
    );
}