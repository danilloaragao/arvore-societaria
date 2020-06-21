import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const Pesquisa = () => {
    const navigation = useNavigation()

    function handleMinhaEmpresa(){
        navigation.navigate('MinhaEmpresa')
    }

    function handlePesquisa(){
        navigation.navigate('MinhaPesquisa')
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <Text style={Styles.title}>Pesquisa</Text>
                <RectButton style={Styles.button} onPress={handleMinhaEmpresa}>
                    <Text style={Styles.buttonText}>
                        Minha Empresa
                    </Text>
                </RectButton>
                <RectButton style={Styles.button} onPress={handlePesquisa}>
                    <Text style={Styles.buttonText}>
                        Pesquisar
                    </Text>
                </RectButton>
            </View>
        // </SafeAreaView>
    )
}

export default Pesquisa

