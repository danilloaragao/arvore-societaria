import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const CadastroUsuario = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const navigation = useNavigation()

    // function handleNavigationToPoints() {
    //     navigation.navigate('Points',{
    //         uf,
    //         city 
    //     })
    // }

    function handleCadastrar() {
        Alert.alert("","Cadastro Efetuado com sucesso!")
        navigation.navigate('Login')
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.container}>
            <Text style={Styles.title}>Cadastro</Text>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                value={name}
                onChangeText={setName}
                autoCorrect={false} />

            <Text>E-mail</Text>
            <TextInput
                style={Styles.input}
                value={email}
                onChangeText={setEmail}
                autoCorrect={false} />

            <Text>Senha</Text>
            <TextInput
                style={Styles.input}
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                secureTextEntry={true} />

            <Text>Confime sua Senha</Text>
            <TextInput
                style={Styles.input}
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                autoCorrect={false}
                secureTextEntry={true} />

            <RectButton style={Styles.button} onPress={handleCadastrar}>
                <Text style={Styles.buttonText}>
                    Cadastrar
                    </Text>
            </RectButton>
        </View>
        // </SafeAreaView>
    )
}

export default CadastroUsuario

