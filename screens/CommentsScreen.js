import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableOpacity, TextInput, StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native';
import { Fontisto, Entypo } from '@expo/vector-icons'; 

import Button from './components/button_Confirmar';
import NovosItens from './components/NovosItens';
import AdcionarItem from './components/AdicionarItens';

export default function App() {

  const [lista, setLista] = useState([
    { texto: "que Jogo BOM VELHO", key: '1'},

  ]);
  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key != key);
      }
    )
  }

  const submeterInformacao = (texto) => {
    setLista((prevLista) => {
      return [
        { texto: texto, key: Math.random().toString() },
        ...prevLista
      ];
    })
  }

  const Confirmar = () => {
    alert('Envio feito com sucesso!');
  }

  return (
    <View style={styles.container}>

      <ImageBackground
      source={require("./assets/Background.png")}
      style={styles.imageBackground}
      blurRadius={10}
      >

      <View style={styles.ImageData}>
      <Image
         source={require('./assets/Re4.png')}
         style={styles.game}
        />
        <Text style={styles.gamename}>Resident Evil 4</Text>
      </View>

      <Text style={styles.bold}>Comments</Text> 

    <View style={styles.conteudo}>
      <AdcionarItem funcao={submeterInformacao} /> 
      <View style={styles.estilolista}>
        <FlatList
        data={lista}
        renderItem={({item}) => (
          <NovosItens props={item} funcao={apertarItem} />
        )}
       />

      </View>
      </View>

      <View style={styles.inputbox}>
       <View style={styles.Comment}>

        <TextInput
         style={styles.input}
         underlineColorAndroid="transparent"
         placeholder='Enter your comment:' 
         placeholderTextColor='#FFF'
         />

      </View>



      <View style={styles.button}>
     <Button labelButton="Confirmar" onpress={Confirmar}/>
     </View>
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
    justifyContent: 'space-between',

  },

  ImageData:{
    display: 'flex',
    flexDirection: 'row',


  },

  game:{
    height:70,
    borderWidth:100,
    width:100,
    resizeMode:"contain",


   },

   gamename:{
    fontSize:20,
    color: '#bbb',
    marginTop: 30,

   },

  postagem:{
    padding:16,
    borderColor: '#ADBAFF',
    borderWidth:1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',

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
    flex:1,
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



  inputbox:{
    alignItems: 'center',
    marginBottom: 300,

  },


  Comment: {
    flexDirection:'row',
    textAlign: 'left',

  },

  conteudo:{
    padding:40,
  },

});