import { Dimensions, Image, StyleSheet } from "react-native";
import { BouncyPressable } from "./BounceAnimationButton";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const isSmallScreen = SCREEN_WIDTH <= 375;

export const PixelToggle = ({ enabled, onToggle }) => {
  const svgPath = enabled
    ? require("../assets/images/Toggleon.png")
    : require("../assets/images/Toggleoff.png");

  return (
    <BouncyPressable onPress={onToggle} style={styles.toggleBtn}>
      <Image source={svgPath} style={styles.toggleImage} />
    </BouncyPressable>
  );
};

const styles = StyleSheet.create({
  toggleBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  toggleImage: {
    width: isSmallScreen ? 80 : 100,
    height: isSmallScreen ? 48 : 60,
  },
});
