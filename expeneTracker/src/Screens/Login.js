import React, { Component } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

class Login extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(

      <ImageBackground source={{uri:"https://cdn.vox-cdn.com/thumbor/XYlyCnHkF7TDX89Hf4LLT0ImKUQ=/0x250:3000x1750/fit-in/1200x600/cdn3.vox-cdn.com/uploads/chorus_asset/file/8609575/acastro_170531_1738_0001_v2.jpg"}} resizeMode="cover" width="10" height="10" style={styles.image}>
<View style={styles.layout} >

<TextInput style={ styles.textFields} placeholder="username" password="email" keyboardType="email-address" />
<TextInput style={ styles.textFields} placeholder="Password" secureTextEntry={true}/>
<Button title="Sign In"/>
</View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  layout:{
    flex:1,
    justifyContent:"center",
    marginRight:"10%",
    marginLeft:"10%",

  },image: {
    flex: 1,
  },
  textFields:{
    marginBottom:10,
    borderBottomWidth:2
  }
})

export default Login;