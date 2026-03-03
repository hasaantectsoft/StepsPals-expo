import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import SettingsActions from "../../components/SettingsAction";
import Background from "../../components/SettingsBackground";
import SettingsHeader from "../../components/SettingsHeader";
import SettingsToggles from "../../components/SettingsToggle";

export default function GoogleSettings() {
  const { height } = useWindowDimensions();

  const [contentHeight, setContentHeight] = useState(0);

  // Visible area excluding bottom nav
  const AVAILABLE_HEIGHT = height - 140;

  const enableScroll = height < 700 || contentHeight > AVAILABLE_HEIGHT;

  return (
    <View style={styles.container}>
      <Background path={require("../../assets/images/background.png")} />

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
});
