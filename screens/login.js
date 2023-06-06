import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableOpacity, TextInput, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Fontisto, Entypo } from '@expo/vector-icons'; 

import Button from './components/button_login';

export default function App() {

  const Login = () => {
    alert('login feito com sucesso!');
  }

  return (
    <View style={styles.container}>

      <ImageBackground
      source={require("./assets/Background2.png")}
      style={styles.imageBackground}
      blurRadius={10}
      >

      <View>
      <Image
         source={require('./assets/LogoR.png')}
         style={styles.logo}
        />
          
        
      </View>
      <Text style={styles.bold}>Login</Text>  

    <View style={styles.email}>

        <TextInput
         style={styles.input}
         underlineColorAndroid="transparent"
         placeholder='Enter your email:' 
         placeholderTextColor='#FFF'       
         />
          <Fontisto name="email" size={24} color="#3353FF" style={styles.icon} />

      </View>

      <View style={styles.password}>

         <TextInput
      style={styles.input}
      placeholder='Enter your password:'
      placeholderTextColor='#FFF'
      secureTextEntry
       />
          <Fontisto name="locked" size={24} color="#3353FF" style={styles.icon} />

          <TouchableOpacity>
              <Entypo name="eye" size={24} color="#3353FF" style={styles.iconSecret} />  
          </TouchableOpacity>
          
      </View>

    <View>
     <Button labelButton="Login" onpress={Login}/>
     </View>
     </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0F14',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBackground:{
    top:10,
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  bold:{
    fontSize: 25,
    color:'#fff',
  },

  input:{
  borderWidth: 1,
  width: 350,
  height: 45,
  borderWidth: 1,
  borderRadius:8,
  backgroundColor:'#7B7F93',
  opacity:0.5,
  borderColor: '#E4E7EB',
  paddingLeft:40,
  fontSize:14,  
  margin: 10,
  color:'#ADBAFF',
 
  },

  logo:{
    height:50,
   borderWidth:95,
   width:150,
   resizeMode:"contain",

  },

  icon:{
    right:350,
    top:20,
  },

  iconSecret:{
     top:20,
     right:60,
  },

  password :{
    flexDirection:'row',
    marginLeft:42,
  },

  email: {
    flexDirection:'row',
     marginLeft:20,
  },

});