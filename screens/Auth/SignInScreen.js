import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainView from "../../components/utils/MainView";
import Globals from "../../public/Globals";

export default function SignInScreen() {
  return (
    <MainView>
      <View style={styles.backButton}></View>
    </MainView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    transform: [{ rotate: "180deg" }],
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 40,
    height: 40,
    backgroundColor: Globals.COLOR.SECONDARY,
    borderRadius: 8,
    top: 0,
    left: 30,
  },
});
