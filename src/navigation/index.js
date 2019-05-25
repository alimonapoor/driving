import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Welcome from '../screens/welcome'
import Rewards from '../screens/rewards'
import Trip from '../screens/trip'

import { theme } from '../constants'

const screens = createStackNavigator({
  Welcome,
  Rewards,
  Trip
}, {
  defaultNavigationOptions : {
    headerStyle : {
      height : 60,
      backgroundColor: theme.colors.gray4,
      borderBottomColor: 'transparent'
    },
    headerTitleContainerStyle: {
      alignItems: 'flex-end',
      paddingLeft: theme.sizes.padding
    },
    headerLeftContainerStyle: {
      alignItems: 'flex-end',
      marginLeft: theme.sizes.padding,
      paddingRight: theme.sizes.base
    },
  },
  headaerLayoutPreset: 'left'
})

export default createAppContainer(screens)