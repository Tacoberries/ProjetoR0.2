import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NovosItens({ props, funcao }) {
    return (
        <TouchableOpacity onPress={() => funcao(props.key)}>
            <View style={styles.postagem}>
                <MaterialIcons name='delete' size={18} color={'gray'}/>
                <Text style={styles.Itemtexto}>{props.texto}</Text>
            </View>          
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postagem: {
        padding:16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius:10,
        flexDirection: 'row',
    },

    itemTexto: {
        marginLeft:30,
        
    }
});