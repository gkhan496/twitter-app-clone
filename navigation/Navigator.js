import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Signup from '../screens/Signup'


class Navigator extends Component {
    render() {
        return <Home />
    }
}

const AppNavigator = createStackNavigator({

        Home: Home,
        Login: Login,
        Signup: Signup
    },

    {
        initialRouteName: 'Home'

    }

)

export default AppNavigator
