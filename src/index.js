import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/history'

export default () => (
  <Provider store={createStore(reducer)}>
    <View style={{flex: 1}}>
      <History />
    </View>
  </Provider>
)
