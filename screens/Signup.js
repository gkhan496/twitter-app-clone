import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Input from '../components/Input';

export class Signup extends Component {
    render() {
        return (
            <View style = {{flex : 14}}>
                <View style = {{ flex:2, justifyContent:"center", alignItems:"center" }}>
                    <Image 
                            style = {{justifyContent: 'center'}} 
                            source = { require('../assets/icon.png') }
                    />                
                </View>
                <View style = {{ flex: 4}}>
                    <Text style = {{fontWeight:'bold', fontSize:35, alignSelf: 'center'}}>Create your account</Text>
                </View>


                <View style= {{ flex: 16 }}>

                    <Input test = {0} placeholder = "Name" placeholderTextColor = 'rgb(102,119,134)' />
                    <Input test = {0} placeholder = "Phone number or email address" placeholderTextColor = 'rgb(102,119,134)'/>
                    <Input test = {0} placeholder = "Password" placeholderTextColor = 'rgb(102,119,134)' secureText = {true}  />

                </View>

                <View style = {styles.viewBottom}>
                    <TouchableOpacity style = {styles.loginButton}>
                        <Text style = {styles.textNext}>Next</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    textNext : {
        
        alignSelf:'center', 
        color:'white', 
        fontSize: 20, 
        fontWeight: 'bold', 
        justifyContent: 'center', 
        marginTop: 7

    },

    loginButton: {

        alignItems: 'center',
        borderRadius: 40,
        backgroundColor:'rgb(119,199,247)',
        height: '87%',
        marginLeft: 'auto',
        marginRight: 5,
        width: '20%',

    },


    viewBottom: {

        alignItems: 'center',
        borderTopColor: 'rgb(204,214,221)',
        borderTopWidth:3,
        flex:2,  
        flexDirection: 'row', 
    }

});

export default Signup
