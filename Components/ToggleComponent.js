import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import RNShake from 'react-native-shake'

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
            isShow : true
        }
    }
    render() {
        if(!this.state.isShow) return null;
        return (
            <View>
                <Text style={this.props.style}>{this.props.text}</Text>
            </View>
        )
    }
    componentDidMount() {
        RNShake.addEventListener('ShakeEvent', () => {
            this.setState(preState => ({
                isShow : !preState.isShow
            }))
        });
    }

    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
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