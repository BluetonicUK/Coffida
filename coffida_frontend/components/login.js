import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './stylesheet'


class Login extends Component{


    constructor(props){
        super(props);

        this.state = {
            loginEmail: '',
            loginPassword: ''
        }
    }

    handleEmail = (email) => {
        this.setState({loginEmail: email})
    }

    handlePassword = (password) => {
        this.setState({loginPassword: password})
    }


  render(){

    //const nav = this.props.navigation;

    return(
        <View style={styles.flexContainer}>
            <TextInput style={styles.input} 
                placeholder='Enter email:' 
                onChangeText={this.handleEmail} 
                value={this.state.loginEmail} />

            <TextInput style={styles.input} 
                placeholder='Enter password:' 
                onChangeText={this.handlePassword}
                value={this.state.loginPassword} />

            <TouchableOpacity style={styles.button}  >
                <Text style={styles.text}> Login </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

export default Login;