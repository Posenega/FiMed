import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Globals from "../public/Globals";
import React from "react";

const SignInScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.mainText}>
        {/* <Text style={styles.text}>SignInScreen</Text> */}
      </View>
      <View style={styles.ctaButton}>
        {/* <Text style={styles.text}>Hello</Text> */}
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Globals.COLOR.PRIMARY,
    paddingHorizontal: Globals.SIZE.HORIZONTAL,
  },
  mainText: {
    flex: 1,
    width: "100%",
    backgroundColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
  },

  // text: {
  //   color: "#fff",
  //   fontFamily: "OpenSans-Bold",
  // },
  ctaButton: {
    flex: 1,
    width: "100%",
    backgroundColor: "green",
  },
});
