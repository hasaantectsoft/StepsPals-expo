import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Background from "../../components/SettingsBackground";
import SettingsHeader from "../../components/SettingsHeader";
import { Fonts } from "../../constants/styles";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// screen scaling logic
const IS_SMALL_SCREEN = SCREEN_WIDTH <= 375;
const BASE_WIDTH = 390;
const SCALE = SCREEN_WIDTH / BASE_WIDTH;

const petData = [
  {
    name: "Pet Name",
    date: "13.05.25",
    image: require("../../assets/images/Dino.png"),
  },
  {
    name: "Pet Name",
    date: "13.05.25",
    image: require("../../assets/images/Cat2.png"),
  },
  {
    name: "Pet Name",
    date: "13.05.25",
    image: require("../../assets/images/Dog.png"),
  },
  {
    name: "Pet Name",
    date: "13.05.25",
    image: require("../../assets/images/Dino.png"),
  },
  {
    name: "Pet Name",
    date: "13.05.25",
    image: require("../../assets/images/Cat2.png"),
  },
  {
    name: "Pet Name",
    date: "13.05.25",
    image: require("../../assets/images/Dog.png"),
  },
];

const Collection = () => {
  const bgWidth = 1218;
  const bgHeight = 1871;

  // original design width (DO NOT SCALE)
  const targetWidth = 260;

  // upper row calculation
  const rowOriginalWidth = 891;
  const rowOriginalHeight = 740;
  const targetHeightUpper =
    targetWidth * (rowOriginalHeight / rowOriginalWidth);

  // lower row calculation
  const lowerRowOriginalWidth = 891;
  const lowerRowOriginalHeight = 801;
  const targetHeightLower =
    targetWidth * (lowerRowOriginalHeight / lowerRowOriginalWidth);

  return (
    <View style={{ flex: 1 }}>
      <Background path={require("../../assets/images/Emptystate.png")} />
      <SettingsHeader text="You’ve got 12/24 little companions so far. The rest are waiting for you" />
      <View
        style={{
          alignItems: "center",
          transform: IS_SMALL_SCREEN ? [{ scale: SCALE }] : [],
          // backgroundColor: "green",
        }}
      >
        <ImageBackground
          source={require("../../assets/images/Collectionssketch.png")}
          style={[
            styles.card,
            { aspectRatio: IS_SMALL_SCREEN ? 0.8 : bgWidth / bgHeight },
          ]}
          resizeMode="stretch"
        >
          <View style={styles.paperMask}>
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              {/* --- UPPER ROW --- */}
              <ImageBackground
                source={require("../../assets/images/upper-row.png")}
                style={{
                  width: targetWidth,
                  height: targetHeightUpper,
                  alignSelf: "center",
                  right: 19,
                }}
                resizeMode="contain"
              >
                <View style={styles.gridContainer}>
                  {petData.map((item, index) => (
                    <PetCard key={index} {...item} />
                  ))}
                </View>
              </ImageBackground>

              {/* --- LOWER ROW --- */}
              <ImageBackground
                source={require("../../assets/images/lower-row.png")}
                style={{
                  width: targetWidth,
                  height: targetHeightLower,
                  alignSelf: "center",
                  right: 20,
                  bottom: 6,
                }}
                resizeMode="contain"
              >
                <View style={styles.gridContainer}>
                  {petData.map((item, index) => (
                    <PetCard key={index + 6} {...item} />
                  ))}
                </View>
              </ImageBackground>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Collection;

const PetCard = ({ name, date, image }) => (
  <View style={styles.cardSlot}>
    <Image source={image} style={styles.petImage} resizeMode="contain" />
    <Text style={styles.petName}>{name}</Text>
    <Text style={styles.petDate}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    marginTop: IS_SMALL_SCREEN ? "3%" : "10%",
    left: 18,
  },

  paperMask: {
    flex: 1,
    marginTop: IS_SMALL_SCREEN ? "25%" : "29%",
    marginBottom: IS_SMALL_SCREEN ? "4%" : "8%",
    marginHorizontal: "5%",
    overflow: "hidden",
    // backgroundColor: "green",
  },

  scrollContainer: {
    flex: 1,
  },

  scrollContent: {
    alignItems: "center",
    paddingBottom: IS_SMALL_SCREEN ? 10 : 20,
  },

  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "2%",
  },

  cardSlot: {
    width: "33.33%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  petImage: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },

  petName: {
    fontSize: 8,
    fontFamily: Fonts.pressStart,
    color: "#000",
    marginBottom: 2,
  },

  petDate: {
    fontSize: 6,
    fontFamily: Fonts.pressStart,
    color: "#666",
  },
});
