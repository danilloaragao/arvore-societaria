import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import Api from '../services/api'
import Loading from '../../components/loading/loading'

const EsqueciSenha = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    function handleRecuperarSenha() {
        setLoading(true)

        let inconsistencias = ''

        if (email.length <= 0 || email.indexOf('@') == -1) {
            Alert.alert('', 'E-mail inválido')
            setLoading(false)
            return
        }

            // Api.post('/api/auth/signup', {
            //     username: name,
            //     email: email,
            //     role: [""],
            //     password: password
            // }).then(response => {
            //     Alert.alert("", "Cadastro Efetuado com sucesso!")
            //     navigation.navigate('Login')
            // }, error => {
            //     Alert.alert("", "Desculpe, algo deu errado com o seu cadastro. Tente novamente mais tarde.")
            // })
            setLoading(false)
            Alert.alert("", "Uma nova senha foi enviada para o e-mail cadastrado.")
            navigation.navigate('Login')
        }

        return (
            <View style={Styles.container}>
                <Loading visible={loading}/>
                <Text style={Styles.title}>Recuperação de Senha</Text>

                <Text>E-mail</Text>
                <TextInput
                    style={Styles.input}
                    value={email}
                    onChangeText={setEmail}
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