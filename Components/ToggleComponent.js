import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'

const style = StyleSheet.create({
    bigBlue: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'
    },
    red: {
        color: 'red'
    }
})

class MyToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow : false
        }
        setInterval(() => {
            this.setState(preState => ({
                isShow : !preState.isShow
            }))
        }, 1000);
    }
    render() {
        if(!this.state.isShow) return null;
        return (
            <View>
                <Text style={this.props.style}>{this.props.text}</Text>
            </View>
        )
    }
}

export default class ToggleComponent extends Component {
  render() {
    return (
      <View>
          <MyToggle text="Xuan Thanh" style={style.bigBlue}></MyToggle>
          <MyToggle text="Uyen Nhi" style={style.red}></MyToggle>
          <MyToggle text="Huong Giang" style={[style.bigBlue, style.red]}></MyToggle>
      </View>
    )
  }
}