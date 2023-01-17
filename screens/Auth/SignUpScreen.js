import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";

import * as Progress from "react-native-progress";

import MainView from "../../components/utils/MainView";
import Globals from "../../public/Globals";
import StepOne from "../../components/Auth/steps/StepOne";
import Arrow from "../../icons/Arrow";
import AuthButton from "../../components/customs/Auth/AuthButton";
import StepTwo from "../../components/Auth/steps/StepTwo";
import StepThree from "../../components/Auth/steps/StepThree";
import { useForm } from "react-hook-form";

export default function SignUpScreen({ navigation }) {
  const [step, setStep] = useState(1);

  // Handling Steps
  const forwardStep = () => {
    if (step === 3) {
      return null;
    }
    setStep(step + 1);
  };
  const backwardStep = () => {
    if (step === 1) {
      return null;
    }
    setStep(step - 1);
  };

  // Sign up Form {data}
  const {
    control,
    formState: { errors },
  } = useForm();

  // Display Steps
  let currentStep = <StepOne />;
  if (step === 2) {
    currentStep = <StepTwo />;
  } else if (step === 1) {
    currentStep = <StepOne />;
  } else if (step === 3) {
    currentStep = <StepThree control={control} error={errors} />;
  }

  return (
    <MainView style={styles.main}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (step === 1) {
            return navigation.goBack();
          }
          backwardStep();
        }}
      >
        <View style={styles.backButton}>
          <Arrow />
        </View>
      </TouchableWithoutFeedback>
      <View style={{ width: "70%" }}>
        <View style={styles.header}>
          <Text style={styles.plainText}>Sign Up</Text>
          <Text style={styles.plainText}>Step: {step}/3</Text>
        </View>
        <View style={styles.progressBar}>
          <Progress.Bar
            height={8}
            color={Globals.COLOR.PRIMARYSWATCH}
            unfilledColor={Globals.COLOR.SECONDARY}
            width={null}
            borderWidth={0}
            progress={step / 3}
          />
        </View>
        {currentStep}

        <AuthButton
          onPress={forwardStep}
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
