import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CustomInput from "../CustomInput";
import DropDownMenu from "../animation/DropDownMenu";
import { Controller } from "react-hook-form";

import Cities from "../../public/Cities";

export default function StepThree({ control }) {
  return (
    <View>
      <Controller
        name="city"
        rules={{ required: true }}
        initialValue=""
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <DropDownMenu
              text="Select your state"
              items={Cities}
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              error={ErrorUtils.city?.message}
            />
          );
        }}
      />
      <View style={{ height: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
