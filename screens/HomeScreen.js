import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeScreen = () => {
  const [lancamentos, setLancamentos] = useState([
    { nome: 'Resident Evil 4', key: 1 },
    { nome: 'Hogwarts Legacy', key: 2 },
  ]);
  const [competitivos, setCompetitivos] = useState([
    { nome: 'Fortnite', key: 1 },
    { nome: 'Valorant', key: 2 },
  ]);
  const [rpgs, setRpgs] = useState([
    { nome: 'Elden Ring', key: 1 },
    { nome: 'Bloodborne', key: 2 },
  ]);
  const [pesquisa, setPesquisa] = useState('');

  const home = () => {
    alert('Ir para página principal');
  };

  const search = () => {
    alert('Efetuar uma pesquisa');
  };

  const request = () => {
    alert('Mudar configurações');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Background.png')} style={styles.imageBackground}>
        <View style={styles.container0}>
          <TextInput
            style={styles.input}
            placeholder="Search Games..."
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"
            onChangeText={setPesquisa}
          />
          <TouchableOpacity onPress={search}>
            <Feather name="search" size={26} color="white" style={styles.iconsearch1} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.h1}>Lançamentos</Text>
          <ScrollView style={styles.box}>
            <FlatList
              numColumns={2}
              keyExtractor={(item) => item.key.toString()}
              data={lancamentos}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.nome}</Text>
              )}
            />
          </ScrollView>
          <Text style={styles.h1}>Competitivos</Text>
          <ScrollView style={styles.box}>
            <FlatList
              numColumns={2}
              keyExtractor={(item) => item.key.toString()}
              data={competitivos}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.nome}</Text>
              )}
            />
          </ScrollView>
          <Text style={styles.h1}>RPGS</Text>
          <ScrollView style={styles.box}>
            <FlatList
              numColumns={2}
              keyExtractor={(item) => item.key.toString()}
              data={rpgs}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.nome}</Text>
              )}
            />
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  imageBackground: {
    flex: 1,
  },
  container0: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  h1: {
    padding: 20,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 20,
    padding: 30,
    margin: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    margin: 10,
    width: '70%',
  },
  iconsearch1: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default HomeScreen;