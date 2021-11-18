import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class Navbar extends Component {
    render() {
        return (
            <View style={{backgroundColor:"orange", height:100, width:'100%', borderBottomLeftRadius:25, 
            borderBottomRightRadius:25,justifyContent:'center'}}>
                <View style = {{flexDirection: 'row'}}> 
                <Text style={{fontSize:18, color:'#ffff',margin:10}}>TARALITY WALLET</Text>
                <Image style={{width:30, height:30, tintColor:'white' ,position: 'absolute',
                right: 15,
                top: 5,}} source={require("../../../assets/notification.png")}/>
                 

                </View>
                
            </View>
        )
    }
}
