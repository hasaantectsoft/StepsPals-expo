import { ImageBackground, StyleSheet, Text } from "react-native";
import { Fonts } from "../constants/styles";

const RankingBtn = ({ title, image, color, IS_SMALL_SCREEN }) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="contain"
      style={[styles.capsule, { width: IS_SMALL_SCREEN ? 280 : 320 }]}
    >
      <Text
        style={[
          styles.text,
          { color: color, fontSize: IS_SMALL_SCREEN ? 12 : 17 },
        ]}
      >
        {title}
      </Text>
    </ImageBackground>
  );
};

export default RankingBtn;

const styles = StyleSheet.create({
  capsule: {
    aspectRatio: 1083 / 203,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: Fonts.pressStart,
    marginTop: 15,
  },
});
