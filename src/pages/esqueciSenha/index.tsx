import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const EsqueciSenha = () => {
    const [user, setUser] = useState('')
    const navigation = useNavigation()

    function handleRecuperarSenha() {
        Alert.alert("", "Uma nova senha foi enviada para o e-mail cadastrado.")
        navigation.navigate('Login')
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Recuperação de Senha</Text>

            <Text>E-mail</Text>
            <TextInput
                style={Styles.input}
                value={user}
                onChangeText={setUser}
                autoCorrect={false} />

            <RectButton style={Styles.button} onPress={handleRecuperarSenha}>
                <Text style={Styles.buttonText}>
                    Enviar nova senha
                    </Text>
            </RectButton>
        </View>
    )
}

export default EsqueciSenha

