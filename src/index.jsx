import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

import Timer from './components/timer/Timer'
import ButtonStopWatch from './components/button/ButtonStopWatch'
import LapList from './components/LapList/LapList'

const index = () => {
  return (
    <View style={styles.container}>
      <Timer/>
      <ButtonStopWatch/>
      <LapList/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    }
})