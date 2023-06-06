import React from "react"
import { StyleSheet, Text, View} from 'react-native';

export default function Lista() {
    return (
        <View style={styles.lista}>
            <Text style={styles.titulo}>Itens</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    lista: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#0D0F14', // Update the background color to match the dark mode palette
    },

    titulo: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',

    },
});