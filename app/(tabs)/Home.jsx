import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PressableAnimated from "../../components/PressableAnimated";
import Background from "../../components/SettingsBackground";
import DinoIdleAtlas from "../../components/SpriteLoader";
import { Fonts } from "../../constants/styles";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const IS_SMALL_SCREEN = SCREEN_WIDTH <= 375;
const getIconSize = () => {
  if (SCREEN_WIDTH <= 375) {
    return 25;
  }
  return 38;
};

const ICON_SIZE = getIconSize();
const Home = () => {
  const Name = "Cato";
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Background path={require("../../assets/images/HomeBackground.png")} /> */}
      <Background
        path={require("../../assets/images/HomeScreen.png")}
      ></Background>

      <View style={styles.artFrame}>
        <ImageBackground
          source={require("../../assets/images/StatusBar.png")}
          style={{
            width: IS_SMALL_SCREEN ? "90%" : "95%",
            aspectRatio: 1196 / 306,
            top: IS_SMALL_SCREEN ? 25 : 48,
            left: 10,
            backgroundColor: "green",
          }}
          resizeMode="contain"
        >
          <Image
            source={require("../../assets/images/completionBar.png")}
            style={{
              width: IS_SMALL_SCREEN ? 22 : 29,
              height: IS_SMALL_SCREEN ? 22 : 29,
              left: IS_SMALL_SCREEN ? 15 : 17,
              top: IS_SMALL_SCREEN ? 39 : 42,
              // zIndex: 1,
            }}
          />
          <Text
            style={{
              position: "absolute",
              left: 40,
              top: IS_SMALL_SCREEN ? 45 : 52,
              color: "black",
              fontFamily: Fonts.pressStart,
              fontSize: IS_SMALL_SCREEN ? 10 : 12,
            }}
          >
            {" "}
            2300/5000 steps
          </Text>
          <Image
            source={require("../../assets/images/bowl.png")}
            style={{
              width: IS_SMALL_SCREEN ? 40 : 60,
              height: IS_SMALL_SCREEN ? 48 : 70,
              top: IS_SMALL_SCREEN ? 45 : 47,
              left: IS_SMALL_SCREEN ? 40 : 55,
            }}
          />
        </ImageBackground>
        <PressableAnimated
          style={[styles.collectionButton, ,]}
          onPress={() => router.push("/Collection")}
        >
          <Image
            source={require("../../assets/images/collection.png")}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </PressableAnimated>

        <View style={styles.nameContainer}>
          <Text style={styles.labelFont}>{Name}</Text>
          <Text style={styles.nameFont}>is happy</Text>
        </View>
      </View>

      <DinoIdleAtlas />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  collectionButton: {
    position: "absolute",
    left: SCREEN_WIDTH < 375 ? "2.9%" : "2.5%",
    bottom: SCREEN_WIDTH <= 375 ? ICON_SIZE : ICON_SIZE,
    // backgroundColor: "red",
  },

  nameContainer: {
    position: "absolute",
    bottom: 9,
    left: 0,
    right: 8,
    // backgroundColor: "green",
  },

  iconImage: {
    width: SCREEN_WIDTH < 375 ? wp("14%") : wp("14%"),
    height: SCREEN_WIDTH < 375 ? wp("14%") : wp("14%"),
  },
  labelFont: {
    fontFamily: Fonts.pressStart,
    fontSize: hp("1.4%"),
    color: "white",
    marginBottom: hp("0.8%"),
    textAlign: "center",
  },
  nameFont: {
    fontFamily: Fonts.pressStart,
    fontSize: hp("1.1%"),
    color: "#FFFD6E",
    textAlign: "center",
  },
  artFrame: {
    flex: 0.4,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp("2%"),
    // backgroundColor: "green",
  },
});
