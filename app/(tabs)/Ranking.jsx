import { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlayerRankingBtn from "../../components/PlayerRankingBtn";
import RankingBtn from "../../components/RankingBtn";
import Background from "../../components/SettingsBackground";
import { Fonts } from "../../constants/styles";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const IS_SMALL_SCREEN = SCREEN_WIDTH <= 375;
const Ranking = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();

    const dayOfWeek = now.getDay();
    const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

    const nextSunday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysUntilSunday,
      0,
      0,
      0,
      0,
    );

    const diff = nextSunday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateTimeLeft();

    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const rankingData = [
    {
      id: "legend",
      title: "LEGEND",
      image: require("../../assets/images/Legend.png"),
      color: "white",
      players: [
        {
          id: 1,
          rank: 1,
          name: "Shrumpalo",
          score: "74 000",
        },
        {
          id: 2,
          rank: 2,
          name: "NightFury",
          score: "69 500",
        },
      ],
    },
    {
      id: "platinum",
      title: "PLATINUM",
      image: require("../../assets/images/Platinum.png"),
      color: "#65839D",
      players: [
        {
          id: 1,
          rank: 1,
          name: "Shrumpalo",
          score: "74 000",
        },
        {
          id: 2,
          rank: 2,
          name: "NightFury",
          score: "69 500",
        },
      ],
    },

    {
      id: "gold",
      title: "GOLD",
      image: require("../../assets/images/GoldBtn.png"),
      color: "#985011",
      players: [
        {
          id: 1,
          rank: 1,
          name: "PixelKing",
          score: "58 200",
        },
        {
          id: 2,
          rank: 2,
          name: "NeoStorm",
          score: "54 900",
        },
        {
          id: 3,
          rank: 3,
          name: "ArcadeX",
          score: "50 100",
        },
      ],
    },
    {
      id: "silver",
      title: "SILVER",
      image: require("../../assets/images/SilverBtn.png"),
      color: "#526976",
      players: [
        {
          id: 1,
          rank: 1,
          name: "PixelKing",
          score: "58 200",
        },
        {
          id: 2,
          rank: 2,
          name: "NeoStorm",
          score: "54 900",
        },
        {
          id: 3,
          rank: 3,
          name: "ArcadeX",
          score: "50 100",
        },
      ],
    },

    {
      id: "bronze",
      title: "BRONZE",
      image: require("../../assets/images/Bronze.png"),
      color: "white",
      players: [
        {
          id: 1,
          rank: 1,
          name: "RetroFox",
          score: "39 800",
        },
        {
          id: 2,
          rank: 2,
          name: "BitCrusher",
          score: "35 400",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background path={require("../../assets/images/RankingBackground.png")} />

      <View
        style={{
          alignItems: "center",
          marginTop: 30,
          gap: 10,
        }}
      >
        <Image
          source={require("../../assets/images/RankingTitle.png")}
          style={{ width: 265, height: 100 }}
        />

        <Text
          style={{
            color: "#2F3450",
            fontFamily: Fonts.pressStart,
            fontSize: 8,
          }}
        >
          Time until the event ends
        </Text>

        <Text
          style={{
            color: "#2F3450",
            fontFamily: Fonts.pressStart,
            fontSize: 12,
          }}
        >
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          marginTop: 20,
          paddingBottom: 30,
        }}
        style={{ marginBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            alignItems: "center",
            gap: 10,
          }}
        >
          {rankingData.map((category) => (
            <View
              key={category.id}
              style={{
                gap: 8,
                alignItems: "center",
              }}
            >
              <RankingBtn
                title={category.title}
                image={category.image}
                color={category.color}
                IS_SMALL_SCREEN={IS_SMALL_SCREEN}
              />

              <PlayerRankingBtn
                categoryId={category.id}
                players={category.players}
                IS_SMALL_SCREEN={IS_SMALL_SCREEN}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ranking;
