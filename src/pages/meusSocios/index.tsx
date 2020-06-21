import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import Socio from '../../components/socios'

const MeusSocios = () => {
    const navigation = useNavigation()

    function handlePerfil(){
        navigation.navigate('CadastroEmpresa')
    }

    function handleMeusSocios(){
        navigation.navigate('MeusSocios')
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
            <Socio></Socio>
            <Socio></Socio>
            <Socio></Socio>
            <Socio></Socio>
            <Socio></Socio>
            </View>
        // </SafeAreaView>
    )
}

export default MeusSocios

