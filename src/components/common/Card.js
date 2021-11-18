import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            
            <View style={{backgroundColor:'#fff',elevation:4, 
            height:180, width:'90%', justifyContent:"center", alignItems:'center', margin:10,borderRadius:8,marginStart:20 }}>

                <View style={{backgroundColor:'orange', height:80, width:80,
                 justifyContent:'center', alignItems:'center', borderRadius:100}}>

                <Image source={require('../../../assets/wallet.png')} style={{height:50,width:50, tintColor:'#fff'}}/>
               
                </View>
                <View style={{alignItems:'center',justifyContent:'center', margin:10}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}> 0 USD</Text>
                <Text style={{fontSize:16}}> Total Crypto Assets</Text>
                </View>
            
          

            </View>

          


            
        )
    }
}
