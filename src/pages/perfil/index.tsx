import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'

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
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Meu Perfil</Text>
            </View>
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
    )
}

export default Perfil
