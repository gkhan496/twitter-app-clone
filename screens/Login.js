import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, SafeAreaView, TouchableOpacity  } from 'react-native'
import Input from '../components/Input'

export class Login extends Component {
    render() {
        return (
            <SafeAreaView style = {{ flex:14, margin: 0, padding: 0}}>
                <View style = {{ flex:2, justifyContent:"center", alignItems:"center" }}>
                    <Image 
                            style = {{justifyContent: 'center', marginTop: 70, marginLeft: 20}} 
                            source = { require('../assets/icon.png') }
                    />
                </View>
                <View style = {{ flex:2, marginTop: 40, marginLeft:7 }}>
                    <Text style = {{ fontWeight: 'bold', fontSize: 28, color: 'rgb(20,23,26)'}}>Log in to Twitter.</Text>
                </View>
                <View style = {{ flex:6 }}>
                    <Text style = {{ color : 'rgb(102,119,134)',  marginLeft:7, fontSize: 17, marginTop:15}}>Phone number, email address, or username</Text>
                    <Input test = {1} /> 

                    <Text style = {{ color : 'rgb(102,119,134)',  marginLeft:7, fontSize: 17, marginTop: 20}}>Password</Text>
                    
                    <Input test = {1} secureText = {true} />

                    <Text style = {{ color : 'rgb(102,119,134)',  alignSelf:'center', marginLeft:7, fontSize: 17, marginTop: 30}}>Forgetten your password?</Text>

                </View>
                <View style = {{ flex:12 }}></View>
                <View style = {{ flex:2, borderTopWidth:3, borderTopColor: 'rgb(204,214,221)', flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style = { styles.loginButton }>
                        <Text style = { styles.textLogin }>Log in</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({

    
    loginButton: {

        alignItems: 'center',
        borderRadius: 40,
        backgroundColor:'rgb(119,199,247)',
        height: '87%',
        marginLeft: 'auto',
        marginRight: 5,
        width: '20%',
    },

    textLogin: {

        alignSelf:'center', 
        color:'white', 
        fontSize: 20, 
        fontWeight: 'bold', 
        justifyContent: 'center', 
        marginTop: 7
    }

});

export default Login
