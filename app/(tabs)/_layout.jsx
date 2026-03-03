// import { Ionicons } from "@expo/vector-icons";
// import { Tabs } from "expo-router";
// import { ActivityIndicator } from "react-native";
// import { AuthProvider, useAuth } from "../../utils/Authcontext";

// export default function TabLayout() {
//   return (
//     <AuthProvider>
//       <Tabss />
//     </AuthProvider>
//   );
// }

// const Tabss = () => {
//   const { loading } = useAuth();

//   if (loading)
//     return (
//       <ActivityIndicator
//         size="large"
//         style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//       />
//     );

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "#111273",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: {
//           backgroundColor: "white",
//           borderTopWidth: 1,
//           borderTopColor: "#e0e0e0",
//           height: 60,
//           paddingBottom: 8,
//           paddingTop: 8,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="HomeScreen"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="ProfileScreen"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// };

import { Tabs } from "expo-router";
import BottomNavigation from "../../components/BottomNavigation";

const TabLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="Home" options={{ headerShown: false }} />
      <Tabs.Screen name="GoogleSettings" options={{ headerShown: false }} />
      <Tabs.Screen name="GraveYard" options={{ headerShown: false }} />
      <Tabs.Screen name="Statistic" options={{ headerShown: false }} />
      <Tabs.Screen name="Ranking" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabLayout;
