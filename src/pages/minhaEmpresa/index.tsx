import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const MinhaEmpresa = () => {
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
                <Text style={Styles.title}>**Nome da Empresa**</Text>
                <RectButton style={Styles.button} onPress={handlePerfil}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='settings' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Perfil Empresa
                    </Text>
                </RectButton>

                <RectButton style={Styles.button} onPress={handleMeusSocios}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='trending-up' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Meus Sócios
                    </Text>
                </RectButton>
            </View>
        // </SafeAreaView>
    )
}

export default MinhaEmpresa

