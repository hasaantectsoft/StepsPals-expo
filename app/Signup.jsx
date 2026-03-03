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

const Signup = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return passwordRegex.test(password);
  };

  const isEmailValid = validateEmail(user?.email || "");
  const isPasswordValid = validatePassword(user?.password || "");

  const getBorderColor = (isTouched, isFocused, isValid, field) => {
    if (!isTouched || !user[field]) return "gray";
    if (isFocused) {
      return isValid ? "green" : "red";
    }
    return "gray";
  };

  const onChangeText = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const handleSignup = async () => {
    setEmailTouched(true);
    setPasswordTouched(true);

    if (!user.email || !user.password || !user.name) {
      alert("Please fill all the fields");
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
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: { name: user.name },
        },
      });

      if (error) {
        alert("Signup failed: " + error.message);
        return;
      }

      alert(
        "Check Email for verification. If dont find email check spam folder!",
      );
      navigation.goBack();
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Signup</Text>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter name"
            style={styles.input}
            value={user.name || ""}
            onChangeText={(value) => onChangeText("name", value)}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter email"
            style={[
              styles.input,
              {
                borderColor: getBorderColor(
                  emailTouched,
                  emailFocused,
                  isEmailValid,
                  "email",
                ),
                borderWidth: 1,
              },
            ]}
            value={user.email || ""}
            onChangeText={(value) => {
              onChangeText("email", value);
              setEmailTouched(true);
            }}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {emailTouched && user.email && !isEmailValid && emailFocused && (
            <Text style={styles.errorText}>
              Email must start with a letter and be like user@domain.com
            </Text>
          )}
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter password"
            style={[
              styles.input,
              {
                borderColor: getBorderColor(
                  passwordTouched,
                  passwordFocused,
                  isPasswordValid,
                  "password",
                ),
                borderWidth: 1,
              },
            ]}
            value={user.password || ""}
            onChangeText={(value) => {
              onChangeText("password", value);
              setPasswordTouched(true);
            }}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            secureTextEntry={true}
          />
          {passwordTouched &&
            user.password &&
            !isPasswordValid &&
            passwordFocused && (
              <Text style={styles.errorText}>
                Min 6 chars, 1 letter, 1 number, 1 special char (@$!%*#?&)
              </Text>
            )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an acc?{" "}
          <Text style={styles.loginLink} onPress={() => navigation.goBack()}>
            Login
          </Text>
        </Text>

        {loading && <ActivityIndicator size="large" style={styles.loader} />}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    width: 300,
    minHeight: 350,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    width: 250,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 250,
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
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  loginText: {
    marginTop: 10,
  },
  loginLink: {
    color: "grey",
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    fontSize: 11,
    marginTop: 4,
    marginLeft: 2,
  },
  loader: {
    marginTop: 20,
  },
});
