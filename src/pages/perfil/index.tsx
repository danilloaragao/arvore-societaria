import React, { useState } from 'react'
import { View, Text, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import SyncStorage from 'sync-storage';
import Loading from '../../components/loading/loading'
import Api from '../services/api'

const Perfil = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState(SyncStorage.get('email'))
    const name = SyncStorage.get('name')
    const id = SyncStorage.get('id')
    const [previousPassword, setpreviousPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }

    function handleAtualizar() {
        setLoading(true)

        let inconsistencias = ''

        if (email.length <= 0 || email.indexOf('@') == -1)
            inconsistencias += '- E-mail inválido.\n'

        if (newPassword.length < 6)
            inconsistencias += '- A nova senha deve conter ao menos 6 caracteres.\n'

        if (newPassword != confirmNewPassword)
            inconsistencias += '- A nova senha e a confirmação da senha estão diferentes.\n'

        if (inconsistencias.length > 0) {
            Alert.alert('', `Favor corrigir o(s) pontos abaixo:\n\n${inconsistencias}`)
            setLoading(false)
            return
        }

        Api.put(`/user/${id}`, {
            username: name,
            email: email,
            password: newPassword,
        }, { headers: headers }).then(() => {
            SyncStorage.set('email', email)
            Alert.alert("", "Atualização efetuado com sucesso!")
            navigation.goBack()
        }, (error) => {
            Alert.alert("", "Desculpe, algo deu errado... Tente novamente mais tarde.")
        })
        setLoading(false)
    }

    function handleCancelar() {
        navigation.goBack()
    }

    function handleExclusao() {
        Alert.alert("", "Confirma a exclusão da conta?", [{
            text: "Sim",
            onPress: () => {
                setLoading(true)
                Api.delete(`/user/${id}`, { headers: headers }).then(() => {
                    let keys: string[] = SyncStorage.getAllKeys()
                    keys.forEach(key => {
                        SyncStorage.remove(key)
                    })
                    Alert.alert("", "Conta excluída com sucesso")
                    navigation.navigate('Login')
                }, (error) => {
                    Alert.alert("", "Desculpe, algo deu errado... Tente novamente mais tarde.")
                })
                setLoading(false)
            }
        }, {
            text: "Não"
        },
        ])
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled={false}>
            <View style={Styles.container}>
                {loading ? <Loading /> : <></>}

                <View>
                    <BackHomeBtn />
                    <Text style={Styles.title}>Meu Perfil</Text>
                </View>
                <ScrollView>

                    <Text>E-mail</Text>
                    <TextInput
                        style={Styles.input}
                        value={email}
                        onChangeText={setEmail}
                        autoCorrect={false} />

                    <Text>Senha Antiga</Text>
                    <TextInput
                        style={Styles.input}
                        value={previousPassword}
                        onChangeText={setpreviousPassword}
                        autoCorrect={false}
                        secureTextEntry={true} />

                    <Text>Senha Nova</Text>
                    <TextInput
                        style={Styles.input}
                        value={newPassword}
                        onChangeText={setNewPassword}
                        autoCorrect={false}
                        secureTextEntry={true} />

                    <Text>Confirme a Senha Nova</Text>
                    <TextInput
                        style={Styles.input}
                        value={confirmNewPassword}
                        onChangeText={setConfirmNewPassword}
                        autoCorrect={false}
                        secureTextEntry={true} />
                </ScrollView>

                <RectButton style={Styles.button} onPress={handleAtualizar}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='edit' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Atualizar Dados
                    </Text>
                </RectButton>

                <RectButton style={Styles.button} onPress={handleExclusao}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='edit' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Deletar Conta
                    </Text>
                </RectButton>

                <RectButton style={Styles.button} onPress={handleCancelar}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='x-circle' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Cancelar
                    </Text>
                </RectButton>


            </View>
        </KeyboardAvoidingView>
    )
}

export default Perfil

