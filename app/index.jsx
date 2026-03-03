import { AppRoutes } from "@/constants/routes";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
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

const Index = () => {
  const [email, setEmail] = useState(""); //asad223nawaz@gmail.com
  const [password, setPassword] = useState(""); //Asad123@
  const [forgot, setForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const router = useRouter();
  const navigation = useNavigation();
  useFocusEffect(() => {
    setForgot(false);
  });

  const cleanup = (forgot = false) => {
    setEmail("");
    setPassword("");
    setLoading(false);
    setForgot(forgot);
    setEmailTouched(false);
    setPasswordTouched(false);
    setEmailFocused(false);
    setPasswordFocused(false);
  };

  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return passwordRegex.test(password);
  };

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  const getBorderColor = (isTouched, isFocused, isValid, field) => {
    if (!isTouched || !field) return "gray";
    if (isFocused) {
      return isValid ? "green" : "red";
    }
    return "gray";
  };

  const login = async () => {
    setEmailTouched(true);
    setPasswordTouched(true);

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    if (!isEmailValid) {
      alert("Please enter a valid email address");
      return;
    }
    if (!isPasswordValid) {
      alert("Please enter a valid password");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Login failed: " + error.message);
        cleanup(true);
        return;
      }

      cleanup();
      alert("Login successful!");
      router.replace(AppRoutes.HOMESCREEN);
    } catch (err) {
      cleanup(true);
      alert("An error occurred: " + err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View style={styles.boxContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>

        {/* Email Input */}
        <View style={{ width: 250 }}>
          <TextInput
            placeholder="Enter email"
            style={[
              styles.input,
              {
                borderColor: getBorderColor(
                  emailTouched,
                  emailFocused,
                  isEmailValid,
                  email,
                ),
                borderWidth: 1,
              },
            ]}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {
              setEmail(text);
              setEmailTouched(true);
            }}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
          {emailTouched && email !== "" && !isEmailValid && emailFocused && (
            <Text style={styles.errorText}>
              Email must start with a letter and be like user@domain.com
            </Text>
          )}
        </View>

        {/* Password Input */}
        <View style={{ width: 250 }}>
          <TextInput
            placeholder="Enter password"
            style={[
              styles.input,
              {
                borderColor: getBorderColor(
                  passwordTouched,
                  passwordFocused,
                  isPasswordValid,
                  password,
                ),
                borderWidth: 1,
              },
            ]}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordTouched(true);
            }}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            secureTextEntry={true}
          />
          {passwordTouched &&
            password !== "" &&
            !isPasswordValid &&
            passwordFocused && (
              <Text style={styles.errorText}>
                Min 6 chars, 1 letter, 1 number, 1 special char (@$!%*#?&)
              </Text>
            )}
        </View>

        {forgot && (
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
          <Text>
            Don't Have an Account?{" "}
            <Text
              style={styles.signup}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Text>
          </Text>
        </View>

        {loading && (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 250,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#111273",
    padding: 10,
    marginTop: 20,
    width: 250,
    alignItems: "center",
    borderRadius: 25,
  },
  buttonContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    gap: 10,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
  boxContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    width: 300,
    minHeight: 300,
  },
  signup: {
    color: "grey",
  },
  errorText: {
    color: "red",
    fontSize: 11,
    marginTop: 4,
    marginLeft: 2,
  },
});




