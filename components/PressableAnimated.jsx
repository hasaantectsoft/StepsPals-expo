import { useRef } from "react";
import { Animated, Pressable } from "react-native";

export default function PressableAnimated({
  children,
  style,
  onPress,
  shakeIntensity = 1,
}) {
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: -shakeIntensity,
        duration: 30,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: shakeIntensity,
        duration: 30,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 30,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Pressable style={style} onPressIn={handlePressIn} onPress={onPress}>
      <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
        {children}
      </Animated.View>
    </Pressable>
  );
}
