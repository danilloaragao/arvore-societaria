import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import Socio from '../../components/socios'
import SocioPesquisa from '../../components/socioPesquisa'

const ResultadoPesquisa = () => {
    const navigation = useNavigation()

    function handleVoltar() {
        navigation.goBack()
    }

    function handleCadastrar() {
        navigation.navigate('CadastroSocio')
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Quadro Societário</Text>
            <View style={Styles.container}>
                <View style={Styles.sociosDe}>
                    <Text style={Styles.description}>Sócios da Empresa A</Text>
                    <ScrollView>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                    </ScrollView>
                </View>
                <View style={Styles.empresaPesquisada}>
                    <SocioPesquisa></SocioPesquisa>
                    </View>
                <View style={Styles.sociosDe}>
                    <Text style={Styles.description}>Empresa A é sócia de</Text>
                    <ScrollView>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default ResultadoPesquisa

