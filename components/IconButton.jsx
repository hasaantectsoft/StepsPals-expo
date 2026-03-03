import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { BouncyPressable } from "./BounceAnimationButton";

export const IconButton = ({
  iconSource,
  iconSourceActive,
  onPress,
  size = 60,
  isActive,
  scaleChildren = true,
  childrenScaleTo = 1.15,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const shouldShowActive = isPressed || isActive;

  return (
    <BouncyPressable
      onPress={onPress}
      onPressStateChange={setIsPressed}
      scaleChildren={scaleChildren}
      childrenScaleTo={childrenScaleTo}
      style={[styles.button, { width: size, height: size }]}
    >
      <View style={{ width: size, height: size }}>
        <Image
          source={iconSource}
          style={[
            styles.icon,
            {
              width: size,
              height: size,
              opacity: shouldShowActive ? 0 : 1,
            },
          ]}
        />
        <Image
          source={iconSourceActive}
          style={[
            styles.icon,
            {
              width: size,
              height: size,
              opacity: shouldShowActive ? 1 : 0,
            },
          ]}
        />
      </View>
    </BouncyPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
  },
  icon: {
    position: "absolute",
    resizeMode: "contain",
  },
});
