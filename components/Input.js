import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class Input extends Component {

    

    render() {
        if (this.props.test == 1){
        return (
            <TextInput 
                secureTextEntry = {this.props.secureText} 
                style = {styles.username1} 
                placeholder = {this.props.placeholder} 
                placeholderTextColor = {this.props.placeholderTextColor} >
            </TextInput>

        )
    }
    else{

        return (
            <TextInput 
                secureTextEntry = {this.props.secureText} 
                style = {styles.username0} 
                placeholder = {this.props.placeholder} 
                placeholderTextColor = {this.props.placeholderTextColor} >
            </TextInput>

        )
    }
}
    
}

const styles = StyleSheet.create({

    username1: {
        marginLeft:7 ,
        width:'96%',
        height:'26%',
        backgroundColor:'white',
        borderBottomWidth: 3,
        borderBottomColor: 'rgb(204,214,221)'
    },

        username0: {

        width:'75%',
        justifyContent: 'center',
        alignSelf: 'center',
        height:'19%',
        backgroundColor:'white',
        borderBottomWidth: 3,
        borderBottomColor: 'rgb(204,214,221)'
    }

});

export default Input
