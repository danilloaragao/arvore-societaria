import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const CadastroEmpresa = () => {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    // function handleNavigationToPoints() {
    //     navigation.navigate('Points',{
    //         uf,
    //         city 
    //     })
    // }

    function handleCadastrar(){
        alert("Cadastro Efetuado com sucesso!")
        navigation.navigate('MinhaEmpresa')
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <Text style={Styles.title}>Dados da Empresa</Text>
                <Text>Nome</Text>
                <TextInput
                    style={Styles.input}
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false} />

                <Text>CNPJ</Text>
                <TextInput
                    style={Styles.input}
                    value={cnpj}
                    onChangeText={setCnpj}
                    autoCorrect={false} />

                <RectButton style={Styles.button} onPress={handleCadastrar}>
                    <Text style={Styles.buttonText}>
                        Cadastrar
                    </Text>
                </RectButton>
            </View>
        // </SafeAreaView>
    )
}

export default CadastroEmpresa

