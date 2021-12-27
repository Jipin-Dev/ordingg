import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function LoadingScreen() {
  return (
    <View>
      <LottieView
        
        style={styles.animation}
        autoPlay
      />
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});