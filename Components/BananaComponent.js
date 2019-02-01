import React, { Component } from 'react'
import {View, Image, AppRegistry} from 'react-native'

export default class BananaComponent extends Component {
  render() {
    let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}>
        </Image>
      </View>
    )
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('FirstDemo', () => BananaComponent);

