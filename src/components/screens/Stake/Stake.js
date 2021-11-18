import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { savedetail } from '../../../Redux/Actions/TransactionsAction'
import { connect } from 'react-redux'
// import { TextInput } from 'react-native-gesture-handler'

class Stake extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''


        }

    }


    // Send_Data_Function = () => {

    //     ({
    //         username: this.state.username,
    //         email: this.state.email,
    //         password: this.state.password
    //     });

    // }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <TextInput style={{ borderWidth: 1, width: '80%', height: 40, margin: 5 }}
                    placeholder="USERNAME"
                    keyboardType="default"
                    value={this.state.username}
                    onChangeText={data => this.setState({ username: data })}
                />



                <TextInput style={{ borderWidth: 1, width: '80%', height: 40, margin: 5 }}
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={data => this.setState({ email: data })}


                    //  onChangeText={(text)=>{this.setState(text)}}
                    placeholder="EMAIL" />


                <TextInput style={{ borderWidth: 1, width: '80%', height: 40, margin: 5 }}
                    placeholder="PASSWORD"
                    value={this.state.password}
                    onChangeText={data => this.setState({ password: data })}
                />

                <View style={{ width: '80%', marginTop: 10 }}>
                    <Button title="SUBMIT" onPress={() => {
                        this.props.savedetail({ "username": this.state.username, "email": this.state.email, "password": this.state.password });
                        Actions.Settings()
                    }} color="red" />
                </View>

            </View>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        savedetail: data => dispatch(savedetail())
    }
}

export default connect(null, mapDispatchToProps)(Stake)
