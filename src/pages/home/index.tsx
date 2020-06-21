import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const Home = () => {
    const navigation = useNavigation()

    function handleMinhaEmpresa() {
        navigation.navigate('CadastroEmpresa')
    }

    function handlePesquisa() {
        navigation.navigate('Pesquisa')
    }

    function handlePerfil() {
        navigation.navigate('Perfil')
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <Text style={Styles.title}>Bem vindo, **Nome Usuário**!</Text>
                <RectButton style={Styles.button} onPress={handlePerfil}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='settings' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Meu Perfil
                    </Text>
                </RectButton>
                <RectButton style={Styles.button} onPress={handleMinhaEmpresa}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='star' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Minha Empresa
                    </Text>
                </RectButton>
                <RectButton style={Styles.button} onPress={handlePesquisa}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='search' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Pesquisar
                    </Text>
                </RectButton>
            </View>
        // </SafeAreaView>
    )
}

export default Home

