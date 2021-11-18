import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react'
import { View, Text ,Dimensions,StyleSheet, Image} from 'react-native';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
 class TrarityCard extends Component {


    constructor(props){
        super(props)
        this.Carousel = {};
        this.state = {
            entries: [
                {
                    id:'1`',title:'TARALITY', subtitle:'BEP20', img:require('./../../../assets/tron.png'), balance:'BALANCE', bal_value: '98,000 TARAL'
                    
                },
                {
                    id:'2`',title:'BITCOIN', subtitle:'BIP20',img:require('./../../../assets/bitcoin.png'),balance:'BALANCE', bal_value: '98,000 TARAL'
                    
                },
                {
                    id:'3`',title:'ETHERIUM' ,subtitle:'ERC20',img:require('./../../../assets/eth.png'),balance:'BALANCE', bal_value: '98,000 TARAL'
                    
                }
            ]
        }
    }
 
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.container} key={index}>
                <View style={{flexDirection:'row',}}>
                <Image source={item.img}  style={{height:30, width:30, marginTop:22,marginLeft:10,}}/>
                <Text style={styles.header }>{item.title}</Text>
                </View>
                <Text style={styles.body}>{item.subtitle}</Text>
                <Text style={styles.body}>{item.balance}</Text>
                <Text style={styles.body}>{item.bal_value}</Text>

    </View>
        );
    }
 
    render () {
     
        return (
            <View style={{justifyContent:'center',alignItems:"center",backgroundColor:"#FFF",padding:30,}} >
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'orange',
      borderRadius: 8,
      width: ITEM_WIDTH,
      height:180,
      paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    image: {
      width: ITEM_WIDTH,
      height: 300,
    },
    header: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
      paddingLeft: 10,
      paddingTop: 20
    },
    body: {
      color: "#fff",
      fontSize: 16,
      paddingLeft: 55,
      paddingRight: 20
    }
  })


export default TrarityCard;