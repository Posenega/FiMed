import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CustomInput from "../../CustomInput";

export default function StepTwo() {
  return (
    <View>
      <CustomInput
        placeholder="Email"
        autoCapitalize="words"
        keyboardType={"email-address"}
      />
      <View style={{ height: 20 }} />
      <CustomInput
        placeholder="Password"
        keyboardType="visible-password"
        isPassword={true}
      />
      <View style={{ height: 20 }} />
      <CustomInput
        placeholder="Confirm your password"
        keyboardType={"visible-password"}
        isPassword={true}
      />
      <View style={{ height: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
