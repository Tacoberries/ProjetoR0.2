import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,ImageBackground } from 'react-native';
import { Fontisto, Entypo,FontAwesome, MaterialIcons,Ionicons, AntDesign } from '@expo/vector-icons'; 

import Button from './components/button_Register';

export default function App() {

  const register = () =>{
    alert("Conta registrada com sucesso!!")
  }
  return (
    <View style={styles.container}>

      <ImageBackground
      source={require("./assets/Background2.png")}
      style={styles.imageBackground}
      blurRadius={10}
      >

      <Text style={styles.bold}>Register</Text> 

      <View style={styles.inputdupla}>

        <TextInput
         style={styles.inputs}
         underlineColorAndroid="transparent"
         placeholder='Nome' 
         placeholderTextColor='#FFF'       
         />
         <TextInput
         style={styles.inputalone}
         underlineColorAndroid="transparent"
         placeholder='Sobrenome'
         placeholderTextColor='#FFF'        
         />
         <Fontisto name="person" size={24} color="#3353FF" style={styles.icon}></Fontisto>
          

      </View> 
      
    <View style={styles.usuario}>

      <TextInput
         style={styles.input}
         underlineColorAndroid="transparent"
         placeholder='Nome de Usuário:' 
         placeholderTextColor='#FFF'       
         />
        <AntDesign name="tag" size={24} color="#3353FF" style={styles.icon}></AntDesign>
        </View>

    <View style={styles.email}>            

        <TextInput
         style={styles.input}
         underlineColorAndroid="transparent"
         placeholder='Email:'
         placeholderTextColor='#FFF'        
         />
          <Fontisto name="email" size={24} color="#3353FF" style={styles.icon} />
          
      </View>
 <View style={styles.password}>

         <TextInput
      style={styles.input}
      placeholder='Senha'
      placeholderTextColor='#FFF'
      secureTextEntry
       />
       <AntDesign name="key" size={24} color="#3353FF" style={styles.icon} />
          
         </View>

<View style={styles.password}>

         <TextInput
      style={styles.input}
      placeholder='Confirmar senha :'
      placeholderTextColor='#FFF'
      secureTextEntry
       />
       <AntDesign name="key" size={24} color="#3353FF" style={styles.icon} />     
         
         </View>

  

  <View>
     <Button labelButton="Register" onpress={register}/>
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
    margin: 5,
    fontSize: 20,
    color:'#fff',
  },

  input:{
  borderWidth: 1,
  width: 350,
  height: 45,
  borderRadius:8,
  backgroundColor:'#7B7F93',
  opacity:0.5,
  borderColor: '#E4E7EB',
  paddingLeft:40,
  fontSize:14,  
  margin: 10,
  left:0,
  color:'#ADBAFF',
  },

  inputs:{
    borderWidth: 1,
    width: 165,
    height: 45,
    borderRadius:8,
    backgroundColor:'#7B7F93',
    opacity:0.5,
    borderColor: '#e4E7EB',
    margin:10,
    marginLeft:10,
    fontSize:14, 
    paddingLeft:40,
    color:'#ADBAFF',
    
  },
  usuario: {
    flexDirection:'row',
     marginLeft:20,
     color:'#fff',
     
  },

  email: {
    flexDirection:'row',
     marginLeft:20,
     color:'#fff',
     
  },

   password :{
    color:'#fff',
    flexDirection:'row',
    marginLeft:20,
  },
  icon:{
    right:350,
    top:20,
  },

  form:{
     flexDirection:'row',
  },
  inputdupla:{
    flexDirection:'row',
    marginLeft: 20,
    
  },

  inputalone:{
    color:'#ADBAFF',
    backgroundColor:'#7B7F93',
  opacity:0.5,
   borderWidth: 1,
    width: 165,
    height: 45,
    borderRadius:8,
    borderColor: '#E4E7EB',
    margin:10,
    fontSize:14, 
    paddingLeft:10,
    
  },


});