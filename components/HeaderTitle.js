import React, { Component } from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';

const CenterTitle = () => {
  return(
    <Image source={{uri: 'https://storyly.io/wp-content/uploads/2020/04/storyllydark.png'}} style={{width: 200,height:50, resizeMode:'contain'}}/>
  )
}

const RightHomeIcon = () => {
  return(
    <TouchableOpacity>
      <Icon name="home" size={40} />
    </TouchableOpacity>
  )
}
export default class HeaderTitle extends Component {
    render() { 
      return(
        <View style={{borderColor: 'black', borderWidth: 1.5}}>
          <Header noShadow  transparent style={{backgroundColor: null}}>
            <Left style={{flex:1}} />
            <CenterTitle style={{flex:1}} />
            <Right style={{flex:1}}>
              <RightHomeIcon />
            </Right>
          </Header>
        </View>
      )
    }
}
