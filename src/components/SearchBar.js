import React from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';


export default function SearchBar () {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Buscar tarea" placeholderTextColor={"gray"}/>
            <TouchableOpacity style={styles.button}>
                <Fontisto name="search" size={20} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

 const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent:"space-between",
        backgroundColor: "black",
        paddingHorizontal: 10,
        borderRadius: 10,

    },
    textInput: {
color: "white",
    },
     button: {
        width: 40,
        backgroundColor: "#137fec",
        justifyContent: "center",
        alignItems: "center",
    }
})