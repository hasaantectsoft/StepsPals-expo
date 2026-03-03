import { ScrollView, StyleSheet, View } from "react-native";
import PopUp from "../../components/PopUp";
import Background from "../../components/SettingsBackground";
import SettingsHeader from "../../components/SettingsHeader";
const Statistic = () => {
  return (
    <View style={styles.container}>
      <Background path={require("../../assets/images/Statistics.png")} />
      <ScrollView>
        <SettingsHeader header="Statistics" />
        <PopUp path={require("../../assets/images/popup.png")} />
      </ScrollView>
    </View>
  );
};

export default Statistic;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
});
