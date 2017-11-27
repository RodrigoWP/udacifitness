import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AddEntry } from './components'

export default () => (
  <View style={styles.container}>
    <AddEntry />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
