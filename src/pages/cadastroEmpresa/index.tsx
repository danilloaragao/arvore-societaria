import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'

const CadastroEmpresa = () => {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    function handleCadastrar() {
        Alert.alert("", "Cadastro Efetuado com sucesso!")
        navigation.navigate('MinhaEmpresa')
    }

    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Dados da Empresa</Text>
            </View>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                value={name}
                onChangeText={setName}
                autoCorrect={false} />

            <Text>CNPJ</Text>
            <TextInput
                style={Styles.input}
                value={cnpj}
                onChangeText={setCnpj}
                autoCorrect={false} />

            <RectButton style={Styles.button} onPress={handleCadastrar}>
                <Text style={Styles.buttonText}>
                    Cadastrar
                    </Text>
            </RectButton>
        </View>
    )
}

export default CadastroEmpresa

