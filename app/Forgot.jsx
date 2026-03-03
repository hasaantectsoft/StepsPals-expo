import { useNavigation } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../lib/supabase";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSendOTP = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "https://reset-password-ten-iota.vercel.app/",
      });

      if (error) {
        alert("Error sending email: " + error.message);
        setLoading(false);
      } else {
        setLoading(false);
        alert("Check your email for the password reset link!");

        navigation.goBack();
      }
    } catch (err) {
      setLoading(false);
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View style={styles.boxContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Forgot Password
        </Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
          <Text style={{ color: "white" }}>Send Reset Email</Text>
        </TouchableOpacity>
        {loading && (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 250,
    marginTop: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#111273",
    padding: 10,
    marginTop: 20,
    width: 250,
    alignItems: "center",
    borderRadius: 25,
  },
  boxContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    gap: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    width: 300,
    height: 250,
  },
});
