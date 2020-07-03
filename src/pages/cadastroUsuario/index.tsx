import React, { useState } from 'react'
import { View, Text, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import Api from '../services/api'
import Loading from '../../components/loading/loading'
import SyncStorage from 'sync-storage'

const CadastroUsuario = () => {
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const navigation = useNavigation()

    const headers = {'Authorization':`Bearer ${SyncStorage.get('token')}`}

    function handleCadastrar() {
        setLoading(true)

        let inconsistencias = ''

        if (name.trim().length <= 0)
            inconsistencias += '- O nome não pode ser vazio.\n'

        if (email.length <= 0 || email.indexOf('@') == -1)
            inconsistencias += '- E-mail inválido.\n'

        if (password.length < 6)
            inconsistencias += '- A senha deve conter ao menos 6 caracteres.\n'

        if (password != passwordConfirm)
            inconsistencias += '- A senha e a confirmação da senha estão diferentes.\n'

        if (inconsistencias.length > 0) {
            Alert.alert('', `Favor corrigir o(s) pontos abaixo:\n\n${inconsistencias}`)
            setLoading(false)
            return
        }
        Api.post('/api/auth/signup', {
            username: name,
            email: email,
            role: [""],
            password: password, 
        },{headers: headers}).then(() => {
            Alert.alert("", "Cadastro Efetuado com sucesso!")
            navigation.navigate('Login')
        }, () => {
            Alert.alert("", "Desculpe, algo deu errado com o seu cadastro. Tente novamente mais tarde.")
        })
        setLoading(false)
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
            <View style={Styles.container}>
            <Loading visible={loading}/>
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
        </KeyboardAvoidingView>
    )
}

export default CadastroUsuario