import React, { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { icon } from "../../constants/icon";
import { styles } from "./tabBarButton.styles";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
interface TabBarButtonProps {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: string;
}
export const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}: TabBarButtonProps) => {
    const scale = useSharedValue(0);
    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return{opacity}
    });
  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 0 : 1) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarContainer}
    >
      {icon[routeName]({ color: isFocused ? "black" : "gray" })}
      <Animated.Text
        style={[{ color: isFocused ? "black" : "gray" }, styles.tabBarText,animatedTextStyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};
