import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    function handleNavigationToCadastroUsuario() {
        navigation.navigate('CadastroUsuario')
    }

    function handleNavigationToEsqueciSenha() {
        navigation.navigate('EsqueciSenha')
    }

    function handleNavigationToHome() {
        navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={Styles.container}>
                <ImageBackground
                    source={require('../../assets/arvore_fundo.png')}
                    style={Styles.container}
                    imageStyle={{ width: 274, height: 368 }}
                ></ImageBackground>
                <View style={Styles.main}>
                    <View>
                        <Text style={Styles.title}>Árvore Societária</Text>
                    </View>
                </View>

                <View style={Styles.footer}>
                    <TextInput
                        style={Styles.input}
                        placeholder='Usuário'
                        value={user}
                        onChangeText={setUser}
                        autoCorrect={false} />
                    <TextInput
                        style={Styles.input}
                        placeholder='Senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        autoCorrect={false} />
                    <View>
                        <Text onPress={handleNavigationToCadastroUsuario}>Cadastrar</Text>
                        <Text style={Styles.esqueciSenha} onPress={handleNavigationToEsqueciSenha}>Esqueci minha senha</Text>
                    </View>
                    <RectButton style={Styles.button} onPress={handleNavigationToHome}>
                        <View style={Styles.buttonIcon}>
                            <Icon name='arrow-right' color='#fff' size={24} />
                        </View>
                        <Text style={Styles.buttonText}>
                            Entrar
                    </Text>
                    </RectButton>
                </View>
            </View>
        </KeyboardAvoidingView>)

}

export default Login

