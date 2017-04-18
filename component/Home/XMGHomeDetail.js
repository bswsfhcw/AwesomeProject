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


var HomeDetail = React.createClass({
    getDefaultProps() {
        
    },
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { this.popToHome() }}>
                    <Text style={styles.welcome}>测试跳转</Text>
                </TouchableOpacity>
                 {this.receive()}
            </View>
            
        );
    },
    popToHome() {
        this.props.navigator.pop();
    },
    receive(){
        alert(this.props.data);
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'

    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 20
    }
});
//输出组件类
module.exports = HomeDetail;