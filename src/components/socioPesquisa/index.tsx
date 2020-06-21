import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const SocioPesquisa = () => {
    function handleExclusao(){
        Alert.alert("","Confirma a remoção da Empresa A da lista de Sócios?",[{
            text: "Sim",
            onPress: () => Alert.alert("","Empresa A removida da lista de Sócios")
        },{
            text: "Não"
        },
        ])
    }

    return (
        <View style={Styles.container}>
              <Text style={Styles.description}>Nome: Empresa B</Text>
            <Text style={Styles.description}>CNPJ: 12.051.771/0001-97</Text>
        </View>
    )
}

export default SocioPesquisa

