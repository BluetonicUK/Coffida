

import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './stylesheet'
import Login from './login';
import Register from './register';


class Home extends Component{

    render(){
        
        const nav = this.props.navigation;

        return(
            
            <View style={styles.flexContainer} >

                <TouchableOpacity style={styles.button} onPress={() => nav.navigate('Login')} >
                    <Text style={styles.text}> Login </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}  onPress={() => nav.navigate('Register')} >
                    <Text style={styles.text}> Register </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default Home;