import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants/styles";

const PopUp = ({ path }) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={path}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.content}>
          <Text style={styles.row}>
            Best Streak: <Text style={styles.value}>[2]</Text>
          </Text>
          <Text style={styles.row}>
            Current Streak: <Text style={styles.value}>[2]</Text>
          </Text>
          <Text style={styles.row}>
            Total Missed Days: <Text style={styles.value}>[0]</Text>
          </Text>
          <Text style={styles.row}>
            Dead Pets: <Text style={styles.value}>[0]</Text>
          </Text>
          <Text style={styles.row}>
            Fully Grown Pets: <Text style={styles.value}>[0]</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PopUp;
const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 80,
  },
  background: {
    width: 350,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  row: {
    fontSize: 12,
    color: "black",
    marginBottom: 6,
    textAlign: "center",
    fontFamily: Fonts.pressStart,
  },
  value: {
    fontWeight: "400",
    color: Colors.primaryText,
  },
});
