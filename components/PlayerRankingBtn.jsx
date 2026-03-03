import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Fonts } from "../constants/styles";

function PlayerRankingBtn({ categoryId, players, IS_SMALL_SCREEN }) {
  const size = IS_SMALL_SCREEN ? 8 : 10;
  return (
    <View>
      {players.map((player, _) => {
        const isFirst = categoryId === "legend" && player.rank === 1;
        return (
          <ImageBackground
            key={player.rank}
            source={
              isFirst
                ? require("../assets/images/Legend_First_Player.png")
                : require("../assets/images/rankingbtn.png")
            }
            style={[styles.container, { width: IS_SMALL_SCREEN ? 240 : 280 }]}
            resizeMode="contain"
          >
            <View style={styles.row} key={player.id}>
              <ImageBackground
                source={require("../assets/images/Capsule.png")}
                style={styles.rankCircle}
                resizeMode="contain"
              >
                <Text style={[styles.rankText, { fontSize: size }]}>
                  {player.rank}
                </Text>
              </ImageBackground>

              <Text style={[styles.nameText, { fontSize: size }]}>
                {player.name}
              </Text>
              <Text style={[styles.scoreText, { fontSize: size }]}>
                {player.score}
              </Text>
            </View>
          </ImageBackground>
        );
      })}
    </View>
  );
}

export default PlayerRankingBtn;

const styles = StyleSheet.create({
  container: {
    width: 280,
    aspectRatio: 1083 / 205,
    justifyContent: "center",
    paddingHorizontal: 16,

    marginLeft: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  rankCircle: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  rankText: {
    fontFamily: Fonts.pressStart,

    color: "",
  },

  nameText: {
    flex: 1,
    marginHorizontal: 12,
    fontFamily: Fonts.pressStart,

    color: "#1A1F3C",
  },

  scoreText: {
    fontFamily: Fonts.pressStart,

    color: "#359AF9",
  },
});
