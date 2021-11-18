import React, { Component } from 'react'
import { Text, View , Image} from 'react-native'

import Navbar from '../../common/Navbar'
import Card from '../../common/Card'
import TrarityCard from '../../common/TarityCard'
import Manage from '../../common/Manage'

 class Home extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Navbar/>
          <Card/>
          <Manage/>
          <TrarityCard/>
        
        
      </View>
    )
  }
}

  export default Home;

