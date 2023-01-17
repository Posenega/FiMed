import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Globals from "../../public/Globals";
import Kidney from "../../icons/Kidney";

export default function Category(props) {
  return (
    <View style={styles.category} key={props.key}>
      <LinearGradient
        colors={[Globals.COLOR.BUTTON, Globals.COLOR.COMPLEMENTBUTTON]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.catContainer}
      >
        {props.icon}
      </LinearGradient>
      <Text style={styles.catText}>{props.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    alignItems: "center",
    marginRight: 10,
  },
  catContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  catText: {
    fontSize: 15,
    fontFamily: Globals.FAMILLY.SEMIBOLD,
    color: "white",
  },
});
