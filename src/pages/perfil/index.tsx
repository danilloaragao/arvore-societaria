import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const Perfil = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [previousPassword, setpreviousPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    function handleAtualizar() {
        alert('Dados atualizados com sucesso!')
        navigation.goBack()
    }

    function handleCancelar() {
        navigation.goBack()
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.container}>
            <Text style={Styles.title}>Meu Perfil</Text>
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


            <RectButton style={Styles.button} onPress={handleAtualizar}>
                <View style={Styles.buttonIcon}>
                    <Icon name='edit' color='#fff' size={24} />
                </View>
                <Text style={Styles.buttonText}>
                    Atualizar Dados
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
        // </SafeAreaView>
    )
}

export default Perfil

