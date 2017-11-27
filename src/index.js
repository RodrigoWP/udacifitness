import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default UdaciFitness = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      UdaciFitnes
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40
  }
})
