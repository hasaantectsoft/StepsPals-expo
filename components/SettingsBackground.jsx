import { ImageBackground, StyleSheet } from "react-native";

export default function Background({ path }) {
  return (
    <ImageBackground
      source={path}
      style={styles.background}
      resizeMode="stretch"
      // resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});
