import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const EsqueciSenha = () => {
    // const [user, setUser] = useState('')
    // const [password, setPassword] = useState('')
    const navigation = useNavigation()

    // function handleNavigationToPoints() {
    //     navigation.navigate('Points',{
    //         uf,
    //         city 
    //     })
    // }

    function handleRecuperarSenha(){
        alert("Uma nova senha foi enviada para o e-mail cadastrado.")
        navigation.navigate('Login')
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <Text style={Styles.title}>Recuperação de Senha</Text>
                
                <Text>E-mail</Text>
                <TextInput
                    style={Styles.input}
                    // placeholder='Usuário'
                    // value={user}
                    // onChangeText={setUser}
                    autoCorrect={false} />

                <RectButton style={Styles.button} onPress={handleRecuperarSenha}>
                    <Text style={Styles.buttonText}>
                        Enviar nova senha
                    </Text>
                </RectButton>
            </View>
        // </SafeAreaView>
    )
}

export default EsqueciSenha

