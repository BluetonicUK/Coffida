
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
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

    onChange = password =>{
         this.setState({loginPassword: password })
    }


    // handlePassword = (password) => {
    //     let passwordLength = this.state.loginPassword.length
    //     if (passwordLength < 6) {
    //         ToastAndroid.show("Password must be longer than 6 characters!", ToastAndroid.SHORT);
    //     }
    //     this.setState({loginPassword: password})
    // }


   register() {


    if(this.state.loginPassword.length < 6){
            ToastAndroid.show("Password must be longer than 6 characters", ToastAndroid.SHORT)

    }
    else if(this.state.firstName.length < 1){

    }
    

    else
    {
        return fetch("http://10.0.2.2:3333/api/1.0.0/user",  
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: this.state.firstName,
                last_name: this.state.surname,
                email: this.state.loginEmail,
                password: this.state.loginPassword,

            })

            })
            .then((response) => {
                //Alert.alert("SUCCESS!");
                console.log("HIT RESPONSE LOGIN");
                //this.props.navigation('Login');
                //return response.json()
                //this.logIn();
            })
                .catch((error) => {
                console.error(error);
                
        }) //end of return

    } //end of else

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
                    onChangeText={this.onChange} 
                    value={this.state.loginPassword} />
                <BarPasswordStrengthDisplay 
                    password= { this.state.loginPassword } 
                    width={200}
                    minLength={1}
                    />

            <TouchableOpacity style={styles.button} onPress={() => this.register()} >
                <Text style={styles.text}> Register User </Text>
            </TouchableOpacity>
        </View>
    );
  }
}







export default Register;