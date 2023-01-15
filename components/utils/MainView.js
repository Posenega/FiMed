import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Globals from "../../public/Globals";

export default function MainView({ children, style }) {
  return (
    <SafeAreaView style={{ backgroundColor: Globals.COLOR.PRIMARY }}>
      <View style={{ ...styles.main, ...style }}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    paddingHorizontal: Globals.PADDING.HORIZONTAL,
  },
});
