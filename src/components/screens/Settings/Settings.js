import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'


 class Settings extends Component {

    render() {
        console.log("DATA", this.props.DATA);
        return (
         
            <View>
           
                <View>
                    <View style={{ backgroundColor: 'grey', height: 80, width: '100%', }}>

                        <TouchableOpacity onPress={() => Actions.Stake()}>
                            <Text style={{
                                alignSelf: 'flex-end', fontSize: 40, fontWeight: 'bold', color: '#fff',
                                marginRight: 40, marginTop: 15,
                            }}>+</Text>
                        </TouchableOpacity>

                    </View>
                   


                </View>
                <FlatList
                data={this.props.DATA.array}
                renderItem={({item})=>(
                    <View>
                        <Text>
                            NAME  = {item.name}

                        </Text>
                        <Text>
                            {item.email}
                            
                        </Text>
                        <Text>
                            {item.password}
                            
                        </Text>
                    </View>
                )}
                /> 

            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        DATA: state.DataReducer
    }
}

export default connect(mapStateToProps, null)(Settings)
