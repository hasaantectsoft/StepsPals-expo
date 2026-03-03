import { Dimensions, StyleSheet, Text, View } from "react-native";
import { IconButton } from "../components/IconButton";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const getIconSize = () => {
  if (SCREEN_WIDTH <= 375) {
    return 50; // Smaller screens (4.65 inches or smaller)
  }
  return 60; // Larger screens (5 inches or bigger)
};

const ICON_SIZE = getIconSize();
export default function BottomNavigation({ state, navigation }) {
  const activeRoute = state.routes[state.index].name;
  console.log(activeRoute);
  return (
    <View
      style={[
        styles.wrapper,
        { bottom: activeRoute === "GoogleSettings" ? 15 : 35 },
      ]}
    >
      <View style={styles.container}>
        <IconButton
          iconSource={require("../assets/images/home.png")}
          iconSourceActive={require("../assets/images/home_active.png")}
          size={ICON_SIZE}
          isActive={activeRoute === "Home"}
          onPress={() => navigation.navigate("Home")}
          scaleTo={1.1}
        />

        <IconButton
          iconSource={require("../assets/images/stats.png")}
          iconSourceActive={require("../assets/images/stats_active.png")}
          size={ICON_SIZE}
          isActive={activeRoute === "Statistic"}
          onPress={() => navigation.navigate("Statistic")}
          scaleTo={1.1}
        />

        <IconButton
          iconSource={require("../assets/images/grave.png")}
          iconSourceActive={require("../assets/images/grave_active.png")}
          size={ICON_SIZE}
          isActive={activeRoute === "GraveYard"}
          onPress={() => navigation.navigate("GraveYard")}
          scaleTo={1.1}
        />
        <IconButton
          iconSource={require("../assets/images/trophy.png")}
          iconSourceActive={require("../assets/images/trophy_active.png")}
          size={ICON_SIZE}
          isActive={activeRoute === "Ranking"}
          onPress={() => navigation.navigate("Ranking")}
          scaleTo={1.1}
        />

        <IconButton
          iconSource={require("../assets/images/settings_unactive.png")}
          iconSourceActive={require("../assets/images/settingsIcon.png")}
          size={ICON_SIZE}
          isActive={activeRoute === "GoogleSettings"}
          onPress={() => navigation.navigate("GoogleSettings")}
          scaleTo={1.1}
        />
      </View>

      {activeRoute === "GoogleSettings" && (
        <Text style={styles.version}>Ver. 0.025</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    // backgroundColor: "green",
    // paddingHorizontal: 5,
    gap: 10,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 5,
    // backgroundColor: "red",
    // gap: 10,
  },
  version: {
    fontFamily: "PressStart2P_400Regular",
    fontSize: 7,
  },
});
