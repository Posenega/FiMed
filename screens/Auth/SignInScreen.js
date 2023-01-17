import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import MainView from '../../components/utils/MainView'
import Globals from '../../public/Globals'
import Arrow from '../../icons/Arrow'

import * as Progress from 'react-native-progress'
import AuthButton from '../../components/customs/Auth/AuthButton'
import SignIn from '../../components/Auth/SignIn'

export default function SignInScreen({ navigation }) {
  return (
    <MainView style={styles.main}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack()
        }}
      >
        <View style={styles.backButton}>
          <Arrow />
        </View>
      </TouchableWithoutFeedback>
      <View style={{ width: '70%' }}>
        <View style={styles.header}>
          <Text style={styles.plainText}>Sign Up</Text>
        </View>
        <View style={styles.progressBar}>
          <Progress.Bar
            height={8}
            color={Globals.COLOR.PRIMARYSWATCH}
            unfilledColor={Globals.COLOR.SECONDARY}
            width={null}
            borderWidth={0}
            progress={1}
          />
        </View>
        <SignIn />
        <AuthButton
          style={{ fontFamily: Globals.FAMILLY.MEDIUM }}
          buttonText="Sign In"
        >
          <View style={{ marginLeft: 10 }}>
            <Arrow />
          </View>
        </AuthButton>
      </View>
    </MainView>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    transform: [{ rotate: '180deg' }],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: Globals.COLOR.SECONDARY,
    borderRadius: 8,
    top: 0,
    left: 30,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plainText: {
    color: 'white',
  },
  progressBar: {
    marginTop: 15,
    width: '100%',
    marginBottom: 20,
  },
})
