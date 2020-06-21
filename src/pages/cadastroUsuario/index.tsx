import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const CadastroUsuario = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const navigation = useNavigation()

    function handleCadastrar() {
        Alert.alert("","Cadastro Efetuado com sucesso!")
        navigation.navigate('Login')
    }

    return (
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
    )
}

export default CadastroUsuario

