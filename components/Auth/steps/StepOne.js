import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../CustomInput";
import AuthButton from "../customs/Auth/AuthButton";
import Globals from "../../public/Globals";
import Arrow from "../../icons/Arrow";

export default function StepOne() {
  return (
    <View>
      <CustomInput
        placeholder="First Name"
        autoCapitalize="words"
        keyboardType={"name-phone-pad"}
      />
      <View style={{ height: 20 }} />
      <CustomInput placeholder="Last Name" keyboardType={"name-phone-pad"} />
      <View style={{ height: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
