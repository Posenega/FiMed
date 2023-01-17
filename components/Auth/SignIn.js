import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../CustomInput'

export default function SignIn() {
  return (
    <View>
      <CustomInput placeholder="Email" />
      <View style={{ height: 20 }} />

      <CustomInput placeholder="Password" />

      <View style={{ height: 40 }} />
    </View>
  )
}

const styles = StyleSheet.create({})
