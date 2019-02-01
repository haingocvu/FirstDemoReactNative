import React, { Component } from 'react'
import { View, AppRegistry, Text } from 'react-native'

export default class GreetingsComponent extends Component {
    render() {
        return (
            <View>
                <MyGreeting text={this.props.text}></MyGreeting>
            </View>
        )
    }
}

class MyGreeting extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent("FirstDemo", () => GreetingsComponent)