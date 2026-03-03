import { Dimensions, Platform, StyleSheet, View } from "react-native";
import { PixelButton } from "./PixelButton";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const isSmallScreen = SCREEN_WIDTH <= 375;

export default function SettingsActions() {
  return (
    <View style={styles.container}>
      <PixelButton
        label={
          Platform.OS === "android"
            ? "Sign In With Google"
            : "Sign In With Apple"
        }
        onPress={() => {}}
      />
      <PixelButton
        label="Support"
        onPress={() => {
          console.log("Support Pressed");
        }}
      />
      <PixelButton label="Privacy Policy" onPress={() => {}} />

      <PixelButton label="Restore Purchases" onPress={() => {}} />

      <PixelButton label="Delete Account" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: isSmallScreen ? 30 : 40,
    gap: isSmallScreen ? 4 : 6,
    alignItems: "center",
  },
});
