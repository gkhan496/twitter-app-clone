import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Login from './Login'
import Signup from './Signup'

export class Home extends Component {
    render() {
        return (
            <View style=  {{ flex:10 }}>
                <View style = {{ flex:1, justifyContent:"center" ,alignItems:"center"}}>
                    <Image 
                        style = {{justifyContent: 'center', marginTop: 35}} 
                        source = { require('../assets/icon.png') }
                    />
                </View>
                <View style = {{ flex:8,justifyContent:"center" }}>
                    <Text style = {{fontSize:45, marginLeft: 30, fontWeight:"bold"}}>See what's happening in the world right now.</Text>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate("Signup")}>
                        <Text style = { styles.buttonText }>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = {{ flex:1 }}>
                    <Text style = {styles.bottomText}>
                        Have an account already? <Text onPress = {() => this.props.navigation.navigate("Login")} style = {styles.bottomTextLink}>Log in</Text>
                    </Text>
                        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'rgb(29,161,242)',
        width: '90%',
        height: '10%',
        marginLeft: 15,
        marginTop: 30,
        borderRadius: 60
    },
    
    buttonText: {
        alignItems: "center",
        fontSize: 28,
        marginTop:'2%',
        color:'white',
        alignSelf:'center',
        fontWeight:"bold"
        
    },

    bottomText: {
        fontSize : 17,
        color: 'rgb(101,119,134)',
        marginLeft: 20
    },

    bottomTextLink: {
        fontSize : 17,
        color: 'rgb(28,148,224)'

    }
  });



export default Home
