
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './stylesheet'

class Register extends Component{

    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            surname: '',
            loginEmail: '',
            loginPassword: ''
        }
    }

    handleFirstName = (firstname) => {
        this.setState({firstname: firstname})
    }

    handleSurname= (surname) => {
        this.setState({surname: surname})
    }

    handleEmail = (email) => {
        this.setState({loginEmail: email})
    }

    handlePassword = (password) => {
        this.setState({loginPassword: password})
    }

  render(){

    return(
        <View style={styles.flexContainer}>
            <TextInput style={styles.input} 
                    placeholder='Enter First Name:'
                    onChangeText={this.handleFirstName} 
                    value={this.state.firstname} />

            <TextInput style={styles.input} 
                    placeholder='Enter Surname:'
                    onChangeText={this.handleSurname} 
                    value={this.state.surname} />

            <TextInput style={styles.input} 
                    placeholder='Enter email:' 
                    onChangeText={this.handleEmail} 
                    value={this.state.loginEmail} />

            <TextInput style={styles.input} 
                    placeholder='Enter password:'
                    onChangeText={this.handlePassword} 
                    value={this.state.loginPassword} />
                    
            <TouchableOpacity style={styles.button}  >
                <Text style={styles.text}> Register User </Text>
            </TouchableOpacity>
        </View>
    );
  }
}







export default Register;