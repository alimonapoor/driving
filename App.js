import React, {Component} from 'react'
import { StyleSheet } from 'react-native'

import Navigation from './src/navigation'
import { Block, Text } from './src/components'

export default class App extends Component {
  render() {
    return (
      <Block>
        <Navigation />
      </Block>
    )
  }
}


