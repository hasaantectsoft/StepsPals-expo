import * as Linking from "expo-linking";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleDeepLink = async (url) => {
      if (!url) return;

      // Supabase puts tokens in fragment (#)
      const hash = url.split("#")[1];
      if (!hash) return;

      const params = new URLSearchParams(hash);
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (access_token && refresh_token) {
        // Sets session so user can update password
        await supabase.auth.setSession({ access_token, refresh_token });
      }
    };

    Linking.getInitialURL().then((url) => handleDeepLink(url));

    const subscription = Linking.addEventListener("url", ({ url }) =>
      handleDeepLink(url),
    );

    return () => subscription.remove();
  }, []);

  const updatePassword = async () => {
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) alert(error.message);
    else alert("✅ Password updated successfully!");
  };

  return (
    <View style={{ padding: 30 }}>
      <Text>Reset Password</Text>
      <TextInput
        placeholder="New password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button
        title={loading ? "Updating..." : "Update Password"}
        onPress={updatePassword}
      />
    </View>
  );
}
