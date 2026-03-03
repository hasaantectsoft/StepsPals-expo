import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Fonts } from "../constants/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEMS_PER_ROW = 3;
const ITEM_MARGIN = 10; // margin on left + right

// Total horizontal space between items
const TOTAL_MARGIN = ITEM_MARGIN * 2 * ITEMS_PER_ROW;
const ITEM_WIDTH = (SCREEN_WIDTH - TOTAL_MARGIN) / ITEMS_PER_ROW;

const Tombstone = ({ name, dateBirth, dateDeath }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/tombStone.png")}
        style={styles.tombstone}
        resizeMode="contain"
      >
        <Text style={styles.name}>{name}</Text>
        <View style={{ marginTop: 8 }}>
          <Text style={styles.date}>{dateBirth}</Text>
          <Text style={styles.date}>{dateDeath}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Tombstone;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginHorizontal: ITEM_MARGIN,
    alignItems: "center",
    marginVertical: 10,
  },
  tombstone: {
    width: "100%",
    aspectRatio: 100 / 120,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 45,
  },
  name: {
    fontFamily: Fonts.pressStart,
    fontSize: 8,
    color: "#000",
    marginBottom: 6,
    textAlign: "center",
    width: "70%",
  },
  date: {
    fontFamily: Fonts.pressStart,
    fontSize: 5,
    color: "#444",
  },
});
