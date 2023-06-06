import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const button = ({ labelButton, onpress}) => {
  return (
    <TouchableOpacity style={styles.button}
        onPress={onpress}
    >
        <Text style={styles.white}>{labelButton}</Text>
    </TouchableOpacity>
  )
}

export default button

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#292E49',
        width: 250,
        height: 45,
        borderWidth: 1,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        color:'white',
        borderColor: '#292E49',
        
        
       
    },
    white:{
        color:'white',
        fontWeight: 'bold',
    }
})