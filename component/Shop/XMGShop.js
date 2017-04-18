import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableOpacity

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入jscon


var Shop = React.createClass({

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress ={()=>{this.pushToDetail()}}>
        <Text style={styles.welcome}>商家</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'

  },
  welcome:{
    fontSize:25,
    textAlign:'center',
    margin:20
  }
});
//输出组件类
module.exports = Shop;