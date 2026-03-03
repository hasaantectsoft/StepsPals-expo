import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import SettingsActions from "../components/SettingsAction";
import Background from "../components/SettingsBackground";
import SettingsHeader from "../components/SettingsHeader";
import SettingsToggles from "../components/SettingsToggle";

export default function GoogleSettings() {
  const { height } = useWindowDimensions();

  const [contentHeight, setContentHeight] = useState(0);

  const CONTAINER_HEIGHT = height - 200;

  const enableScroll = contentHeight > CONTAINER_HEIGHT;

  return (
    <View style={styles.container}>
      <Background path={require("../assets/images/background.png")} />

      <View style={[styles.scrollContainer, { height: CONTAINER_HEIGHT }]}>
        <ScrollView
          scrollEnabled={enableScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onContentSizeChange={(_, h) => setContentHeight(h)}
        >
          <SettingsHeader header="Settings" />
          <SettingsToggles />
          <SettingsActions />
        </ScrollView>
      </View>

      <BottomNavigation coming={"Settings"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    width: "100%",
    alignSelf: "center",
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
