import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  PressStart2P_400Regular,
  useFonts,
} from "@expo-google-fonts/press-start-2p";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import "react-native-reanimated";
import { supabase } from "../lib/supabase";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const navigate = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setIsLoggedIn(!!session);
      setLoading(false);
    };
    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);

      // {
      //   isLoggedIn ? navigate.replace(AppRoutes.PROFILESCREEN) : null;
      // }
      console.log("Event", event);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (loading || !fontsLoaded)
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );

  return (
    <>
      <Stack>
        {/* <Stack.Screen name="GoogleSettings" /> */}
        {/* <Stack.Screen name="SpriteLoader"/> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Petmenu" options={{ headerShown: false }} />
        {/* {isLoggedIn ? (
          <Stack.Screen name="(tabs)" />
        ) : (
          <>
            <Stack.Screen name="index" />
            <Stack.Screen name="Signup" />
            <Stack.Screen
              name="Forgot"
              options={{
                headerShown: true,
                title: "Forgot Password",
              }}
            />
          </>
        )} */}
      </Stack>
      <StatusBar barStyle="light-content" />
    </>
  );
}
