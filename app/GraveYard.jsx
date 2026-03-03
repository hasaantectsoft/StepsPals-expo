import { ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Background from "../components/SettingsBackground";
import SettingsHeader from "../components/SettingsHeader";
import Tombstone from "../components/TomeStone";

const GraveYard = () => {
  return (
    <>
      <Background path={require("../assets/images/GraveYard_Background.png")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        // IMPORTANT: Adds padding at bottom so text isn't hidden behind Navigation
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <SettingsHeader
          header="Graveyard"
          // text="You don't have a pet die yet. Keep it Up!"
        />

        <View style={styles.grid}>
          <Tombstone
            name="Shrumpal"
            dateBirth="13.05.25"
            dateDeath="23.05.25"
          />
          <Tombstone name="Fluffy" dateBirth="01.01.24" dateDeath="15.08.24" />
          <Tombstone name="Fluffy" dateBirth="01.01.24" dateDeath="15.08.24" />
          <Tombstone
            name="Shrumpal"
            dateBirth="13.05.25"
            dateDeath="23.05.25"
          />
          <Tombstone name="Fluffy" dateBirth="01.01.24" dateDeath="15.08.24" />
          <Tombstone name="Fluffy" dateBirth="01.01.24" dateDeath="15.08.24" />
          <Tombstone
            name="Shrumpal"
            dateBirth="13.05.25"
            dateDeath="23.05.25"
          />
          <Tombstone name="Fluffy" dateBirth="01.01.24" dateDeath="15.08.24" />
          <Tombstone name="Fluffy" dateBirth="01.01.24" dateDeath="15.08.24" />
        </View>

        <Text style={styles.footerText}>
          Your earliest pets now rest in memory beyond the graveyard…
        </Text>
      </ScrollView>

      <BottomNavigation coming={"GraveYard"} />
    </>
  );
};

export default GraveYard;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    marginTop: 30,
    fontFamily: "PressStart2P_400Regular",
    fontSize: 12,
    color: "#6E5B51",
    marginBottom: 8,
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    lineHeight: 20,
  },
});
