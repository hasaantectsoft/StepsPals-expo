import { ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../../components/SettingsBackground";
import SettingsHeader from "../../components/SettingsHeader";
import Tombstone from "../../components/TomeStone";
import { Colors, Fonts } from "../../constants/styles";
const GraveYard = () => {
  return (
    <>
      <Background
        path={require("../../assets/images/GraveYard_Background.png")}
      />
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
          {[
            { name: "Shrumpal", dateBirth: "13.05.25", dateDeath: "23.05.25" },
            { name: "Fluffy", dateBirth: "01.01.24", dateDeath: "15.08.24" },
            { name: "Shrumpal", dateBirth: "13.05.25", dateDeath: "23.05.25" },
            { name: "Fluffy", dateBirth: "01.01.24", dateDeath: "15.08.24" },
            { name: "Shrumpal", dateBirth: "13.05.25", dateDeath: "23.05.25" },
            { name: "Fluffy", dateBirth: "01.01.24", dateDeath: "15.08.24" },
          ].map((item, index) => (
            <Tombstone
              key={index}
              name={item.name}
              dateBirth={item.dateBirth}
              dateDeath={item.dateDeath}
            />
          ))}
        </View>

        <Text style={styles.footerText}>
          Your earliest pets now rest in memory beyond the graveyard…
        </Text>
      </ScrollView>
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
    fontFamily: Fonts.pressStart,
    fontSize: 12,
    color: Colors.primaryText,
    marginBottom: 8,
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    lineHeight: 20,
  },
});
