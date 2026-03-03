import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants/styles";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const isSmallScreen = SCREEN_WIDTH <= 375;

export default function Header({ header = "", text = "" }) {
  return (
    <>
      {header && (
        <View style={[styles.headerContainer]}>
          <Text style={styles.title}>{header}</Text>
        </View>
      )}
      {text && (
        <Text
          style={[
            styles.title,
            {
              fontSize:
                header === "Graveyard"
                  ? isSmallScreen
                    ? 8
                    : 10
                  : isSmallScreen
                    ? 12
                    : 14,
              color: Colors.primaryText,
              lineHeight: isSmallScreen ? 13 : 15,
              alignSelf: "center",
              marginTop: header === "Graveyard" ? 10 : "10%",
            },
          ]}
        >
          {text}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.pressStart,
    fontSize: isSmallScreen ? 16 : 20,
    textAlign: "center",
  },
  headerContainer: {
    height: isSmallScreen ? 70 : 90,
    justifyContent: "flex-end",
  },
});
