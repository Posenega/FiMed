import { StyleSheet, Text, View } from "react-native";
import React from "react";

import * as Progress from "react-native-progress";

import MainView from "../../components/utils/MainView";
import Globals from "../../public/Globals";
import StepOne from "../../components/steps/StepOne";
import Arrow from "../../icons/Arrow";
import AuthButton from "../../components/customs/Auth/AuthButton";
import StepTwo from "../../components/steps/StepTwo";

export default function SignUpScreen() {
  return (
    <MainView style={styles.main}>
      <View style={{ width: "70%" }}>
        <View style={styles.header}>
          <Text style={styles.plainText}>Sign Up</Text>
          <Text style={styles.plainText}>Step: 1/3</Text>
        </View>
        <View style={styles.progressBar}>
          <Progress.Bar
            height={8}
            color={Globals.COLOR.PRIMARYSWATCH}
            unfilledColor={Globals.COLOR.SECONDARY}
            width={null}
            borderWidth={0}
            progress={1 / 3}
          />
        </View>
        {/* <StepOne /> */}
        <StepTwo />
        <AuthButton
          style={{ fontFamily: Globals.FAMILLY.MEDIUM }}
          buttonText="Continue"
        >
          <View style={{ marginLeft: 10 }}>
            <Arrow />
          </View>
        </AuthButton>
      </View>
    </MainView>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  //General
  plainText: {
    color: "white",
  },
  //Specific
  //Step one
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  progressBar: {
    marginTop: 15,
    width: "100%",
    marginBottom: 20,
  },
});
