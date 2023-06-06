import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,ImageBackground, FlatList, SafeAreaView, ScrollView,TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import  Axios  from "axios";
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen( ) {
  const [lancamentos,setLancamentos] = useState([  
   {nome: `Resident Evil 4 `, key:1},
   {nome: ` Hogwarts Legacy `, key:2},
  ])
  const [competitivos,setCompetitivos] = useState([  
   {nome: ` Fortnite `, key:1},
   {nome: ` Valorant `, key:2},
  ])
  const [rpgs,setRpgs] = useState([  
   {nome: ` Elden Ring `, key:1},
   {nome: ` Bloodborne `, key:2},
  ])
  const [pesquisa,setpesquisa] = useState('')

  const home = () => {
   alert('Ir para página principal');
 }
 const search = () => {
   alert('Efetuar uma pesquisa');
 }
 const request = () => {
   alert('Mudar configurações');
 }

 return (
    <View style={styles.container}>

     <ImageBackground
     source={require('./assets/Background.png')}
     style={styles.imageBackground}
     >
       
    <View style={styles.conatiner0}>
     <TextInput 
    style={styles.input}
    placeholder='Search Games...'
    placeholderTextColor='#fff' 
    underlineColorAndroid="transparent"
    onChangeText={setpesquisa}
    />
           <TouchableOpacity
      onPress={search}>
      <Feather name="search" size={26} color="white" style={styles.iconsearch1}  />
      </TouchableOpacity>
    </View>
    
    
    
   <ScrollView>
     <Text style={styles.h1}>Lançamentos</Text>  
     <ScrollView style={styles.box}>
     <FlatList
    numColumns={2}
    keyExtractor={(item)=> item.key}
    data={lancamentos}
    renderItem={({item}) => (     
     
    <Text style={styles.item}> {item.nome} </Text> 
    )}
    />
     </ScrollView>

     <Text style={styles.h1}>Competitivos</Text>
     <ScrollView style={styles.box}>
     <FlatList
    numColumns={2}
    keyExtractor={(item)=> item.key}
    data={competitivos}
    renderItem={({item}) => (     
     
    <Text style={styles.item}> {item.nome} </Text> 
    )}
    />
     </ScrollView>

     <Text style={styles.h1}>RPGS</Text>
     <ScrollView style={styles.box}>
     <FlatList
    numColumns={2}
    keyExtractor={(item)=> item.key}
    data={rpgs}
    renderItem={({item}) => (     
     
    <Text style={styles.item}> {item.nome} </Text> 
    )}
    />
     </ScrollView>
   </ScrollView>
     </ImageBackground>
     </View>
     
 );
}

function GenerosScreen() {

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

   

   const submeterInformacao = (selectedGenero) => {
    Axios.post("http://192.168.15.122:3001/item", { item: selectedGenero })
    alert("sucesso!")
  }
  
  return (
    <View style={stylesgeneros.container}>

    <ImageBackground
      source={require('./assets/Background.png')}
      style={stylesgeneros.imageBackground}
      >

      <Text style={stylesgeneros.bold}>Quais são alguns de seus gêneros favoritos?</Text> 

                                   
      <FlatList
     numColumns={3}
     keyExtractor={(item)=> item.key}
     data={generos}
     renderItem={({item}) => (     
    
      <TouchableOpacity onPress={() => toggleGenero(item.key)}>
    <Text style={[stylesgeneros.item, isSelected(item.key) ? {backgroundColor: '#3353FF'} : null]}> {item.nome} </Text> 
  </TouchableOpacity>  
     
     )}
     />

    <View style={stylesgeneros.button}>
    <Button title="Confirmar" onPress={() => submeterInformacao(selectedGenero)} />
     </View>

     </ImageBackground>

     </View>

  );

}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarStyle: {
              backgroundColor: '#0D0F14AA',
              borderTopWidth: 0,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 6,
            },
            tabBarActiveTintColor: '#ADBAFF',
            tabBarInactiveTintColor: '#ADBAFF80',
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Generos') {
                iconName = 'list';
              }

              return <Feather name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false, // Hide the header for HomeScreen
            }}
          />
          <Tab.Screen
            name="Generos"
            component={GenerosScreen}
            options={{
              headerShown: false, // Hide the header for GenerosScreen
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#333', // Change background color to dark mode color
    justifyContent:'center',
    alignContent:'center',
    
      },

  imageBackground:{
    flex:1,

  },

  conatiner0:{
    
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    marginTop:20,
    flexDirection:'row',
  },

  containerh1:{
   marginLeft:20,
   marginBottom:-45,
  },

  h1:{
    padding: 20,
    fontSize:30,
    alignItems:'center',
    justifyContent:'center',
    color: '#fff', // Change text color to white for dark mode
  },

  input:{
    borderWidth: 1 ,
    borderRadius: 25,
    paddingLeft:40,
    fontSize:14,
    width:350,
    height: 40,
    opacity:0.25,
    backgroundColor:'#292E49', // Change background color to dark mode color
    marginBottom:15,
    marginLeft:1,
    left:13,
    elevation:5,
    color: '#ADBAFF', // Change text color to white for dark mode
  },

  icon:{
    right:355,
    bottom:7,
    color: '#967259', // Change icon color to light mode color
  },
  
  item:{
    fontSize:20,
    width:'40%',
    height: 150,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor: '#222', // Change background color to dark mode color
    margin: 8,
    padding:10,
    flexGrow: 1,
    borderRadius: 15,
    borderBottomLeftRadius:0,
    borderTopRightRadius:0,
    paddingLeft:30,
    paddingTop:10,
    elevation:5,
    color: '#fff', // Change text color to white for dark mode
  },
  box:{
    flex:0,
    marginTop: 10,
    
    
  },

  footer:{
    borderTopLeftRadius:52,
    borderTopRightRadius:52,
    backgroundColor:"#0D0F14",
    opacity:0.5,
    flexDirection:'row',
    paddingBottom:10,
    alignItems: 'center', // Add alignItems property to center items vertically
    justifyContent: 'center', // Add justifyContent property to center items horizontally
  },

  footertext:{
    color:"white",
    left:25,
    top:38,
    marginLeft:50,
  },

  iconsearch:{
    left:-8,
    top:10,
    color: '#162683', // Change icon color to white for dark mode
    padding: 20,
  },

  iconsearch1:{
    bottom:8,
    right:330,
    color: '#162683', // Change icon color to white for dark mode
   
  },
  
  iconhome:{
    left:0,
    top:2,
    color: '#ADBAFF', // Change icon color to white for dark mode
    padding: 20,
  },

  iconrequest:{
    left:8,
    top:10,
    color: '#162683', // Change icon color to white for dark mode
    padding: 20,
  },
});

const stylesgeneros = StyleSheet.create({
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
