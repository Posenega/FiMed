import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import Globals from "../../../public/Globals";

export default function AuthSecondaryButton(props) {
  if (props.isSignup) {
    return (
      <View style={styles.main}>
        <Text style={styles.buttonText}>Already have an account? </Text>
        <TouchableWithoutFeedback onPress={props.onPress}>
          <Text style={{ ...styles.buttonText, ...styles.button }}>
            Sign In
          </Text>
        </TouchableWithoutFeedback>
        <Text style={styles.buttonText}> instead.</Text>
      </View>
    );
  } else
    return (
      <View style={styles.main}>
        <Text style={styles.buttonText}>Don't have an account? </Text>
        <TouchableWithoutFeedback onPress={props.onPress}>
          <Text style={{ ...styles.buttonText, ...styles.button }}>
            Create one.
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontFamily: Globals.FAMILLY.LIGHTITALIC,
    fontSize: 13,
  },
  button: {
    color: Globals.COLOR.BUTTON,
    fontFamily: Globals.FAMILLY.MEDIUM,
    textDecorationLine: true,
  },
});
