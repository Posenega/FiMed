import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Globals from "../../../public/Globals";

export default function AuthButton(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <LinearGradient
        colors={[Globals.COLOR.BUTTON, Globals.COLOR.COMPLEMENTBUTTON]}
        style={styles.mainContainer}
      >
        <Text style={{ ...styles.buttonText, ...props.style }}>
          {props.buttonText}
        </Text>
        {props.children}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontFamily: Globals.FAMILLY.BOLD,
    fontSize: 15,
  },
});
