import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

class Login extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(

      <View>
        <Text>Hello...</Text>
        <Text>Welcome...</Text>
        <TextInput style={ styles.textFields} password="email" keyboardType="email-address" />
        <TextInput style={ styles.textFields} placeholder="Password" secureTextEntry={true}/>
        <Button title="Sign In"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textFields:{
    borderColor:"red",
    borderWidth:2
  }
})

export default Login;