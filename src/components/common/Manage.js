import React, { Component } from 'react'
import { Text, View , Image} from 'react-native'

export default class Manage extends Component {
    render() {
        return (
            <View style={{flexDirection:'row', margin:15}}>

            <View style={{flex:1}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>1 Wallet</Text>
            </View>

           <View style={{flexDirection:'row'}}>
            
           <Text style={{fontSize:18, fontWeight:'bold'}}>Manage</Text>
           <Image source={require('../../../assets/manage.png')} style={{height:20, width:20, marginTop:5,marginLeft:5}} />
            </View>

          </View>
        )
    }
}
