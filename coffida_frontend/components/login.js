import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import styles from './stylesheet'
import UserHome from './user_home';


class Login extends Component{


    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            id: '',
            loginEmail: '',
            loginPassword: '',
            authenticationKey: ''
        }
    }

    // handleID = (id) => {
    //     this.setState({id: id})
    // }

    handleEmail = (email) => {
        this.setState({loginEmail: email})
    }

    handlePassword = (password) => {
        this.setState({loginPassword: password})
    }

    // handleAuthKey = (key) => {
    //     this.setState({authenticationKey: key})
    // }


    //

    logIn() {


        return fetch("http://10.0.2.2:3333/api/1.0.0/user/login",  
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.loginEmail,
                password: this.state.loginPassword,
                //id: this.state.id,
                //session_token: this.state.authenticationKey
            })

            })
            .then((response) => {
                Alert.alert("SUCCESS!");
                console.log("get here??????");
                this.props.navigation('User Home');
                //return response.json()
                //this.logIn();
            })
                .catch((error) => {
                console.error(error);
        })
    
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

            <TouchableOpacity style={styles.button} onPress={() => this.logIn()} >
                <Text style={styles.text}> Login </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

export default Login;