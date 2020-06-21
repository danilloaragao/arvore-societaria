import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import Socio from '../../components/socios'

const MeusSocios = () => {
    const navigation = useNavigation()

    function handleVoltar() {
        navigation.goBack()
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}> Meus Sócios</Text>
            <ScrollView>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
                <Socio></Socio>
            </ScrollView>
            <View style={Styles.buttonWrapper}>
                <RectButton style={Styles.button} onPress={handleVoltar}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='arrow-left' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Voltar
                    </Text>
                </RectButton>

                <RectButton style={Styles.button} onPress={handleVoltar}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='plus-circle' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Cadastrar
                    </Text>
                </RectButton>
            </View>
        </View>
    )
}

export default MeusSocios

