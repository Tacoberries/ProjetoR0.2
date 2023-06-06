import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity,ImageBackground, } from 'react-native';
import { Fontisto, Entypo,FontAwesome, MaterialIcons,Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';


export default function App() {

  const [generos, setGeneros] = useState([  
    {nome: `Ação`, key:1},
    {nome: `RPG`, key:2},
    {nome: `Aventura`, key:3},
    {nome: `Difícil`, key:4},
    {nome: `Terror `, key:5},
    {nome: `Indie `, key:6},
    {nome: `Multiplayer `, key:7},
    {nome: `Plataforma `, key:8},
    {nome: `FPS `, key:9},
    {nome: `Puzzle `, key:10},
    {nome: `Beat-em up `, key:11},
    {nome: `Rítimico `, key:12},
    {nome: `Simulação`, key:13},
    {nome: `Rouglike `, key:14},
    {nome: `Sandbox `, key:15},
    
   ])

   const [selectedGenero, setSelectedGenres] = useState([]);

   const toggleGenero = (generoKey) => {
     if (selectedGenero.includes(generoKey)) {
       setSelectedGenres(selectedGenero.filter(key => key !== generoKey));
     } else {
       setSelectedGenres([...selectedGenero, generoKey]);
     }
   }
 
   const isSelected = (generoKey) => {
     return selectedGenero.includes(generoKey);
   }


  const Confirmar = () =>{
    alert("sucesso!")
  }
  
  return (
    <View style={styles.container}>

    <ImageBackground
      source={require('./assets/Background.png')}
      style={styles.imageBackground}
      >

      <Text style={styles.bold}>Quais são alguns de seus gêneros favoritos?</Text> 

                                   
      <FlatList
     numColumns={3}
     keyExtractor={(item)=> item.key}
     data={generos}
     renderItem={({item}) => (     
    
      <TouchableOpacity onPress={() => toggleGenero(item.key)}>
    <Text style={[styles.item, isSelected(item.key) ? {backgroundColor: '#3353FF'} : null]}> {item.nome} </Text> 
  </TouchableOpacity>  
     
     )}
     />

    <View style={styles.button}>
     <Button labelButton="Confirmar" onpress={Confirmar}/>
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
    maxwidth:80,
    
  },
  
  imageBackground:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  bold:{
    top:15,
    padding:50,
    textAlign:'center',
    fontSize: 30,
    color: '#fff'
    
  },

  item:{
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:15,
    width:110,
    height: 80,
    backgroundColor: '#ADBAFF', // Change background color to dark mode color
    margin: 5,
    padding:10,
    flexGrow: 1,
    borderRadius: 15,
    borderColor: '#162683',
    paddingLeft:13,
    paddingTop:13,
    elevation:5,
    color: '#fff', // Change text color to white for dark mode
    fontStyle:"italic",
  },
  
 });
