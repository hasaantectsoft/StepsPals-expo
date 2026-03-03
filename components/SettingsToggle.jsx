import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PixelToggle } from "./PixelToggle";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const isSmallScreen = SCREEN_WIDTH <= 375;

export default function SettingsToggles() {
  const [music, setMusic] = useState(false);
  const [sounds, setSounds] = useState(false);

  return (
    <View style={styles.toggleContainer}>
      <View style={styles.container}>
        <ToggleRow
          label="Music"
          value={music}
          onToggle={() => setMusic(!music)}
        />
        <ToggleRow
          label="Sounds"
          value={sounds}
          onToggle={() => setSounds(!sounds)}
        />
      </View>
    </View>
  );
}

function ToggleRow({ label, value, onToggle }) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{label}</Text>
      <PixelToggle enabled={value} onToggle={onToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  row: {
    width: isSmallScreen ? 280 : 300,
    marginVertical: isSmallScreen ? 15 : 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: isSmallScreen ? 16 : 20,
    alignSelf: "center",
  },
  toggleContainer: {
    height: isSmallScreen ? 180 : 220,
    justifyContent: "flex-end",
  },
});
